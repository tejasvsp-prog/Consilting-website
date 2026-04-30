import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageTransition, { PageHeader } from "../components/PageTransition";
import { services } from "../sections/Services";

export default function ServicesOverview() {
  return (
    <PageTransition>
      <PageHeader
        tag="Services"
        title={
          <>
            Four levers.{" "}
            <span className="gold italic">One outcome: growth.</span>
          </>
        }
        subtitle="Each service is a self-contained engagement, but the real lift comes from running two or more in concert. Pick where you want to start."
      />

      <section className="section bg-midnight pb-32 md:pb-48">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <ServiceCube />
        </div>
      </section>
    </PageTransition>
  );
}

/* ─────────────────────────────────────────────────────────────────
   ServiceCube — interactive 3D rotating cube. Four sides each show
   one service (SEO, Website Development, Maintenance, Meta Ads).
   The top + bottom faces show the AMARA brand mark.
   - Idle: continuous slow Y rotation
   - Hover: pauses, follows cursor for fine-grained rotation
   - Click & drag: free rotation
   - Double-click / tap a face: navigate to that service
   - Below the cube: a row of 4 face buttons that snap-rotate to
     the matching face when clicked
   ───────────────────────────────────────────────────────────── */

const CUBE_SIZE = 520; // px — bigger, fills more of the space
const HALF = CUBE_SIZE / 2;

function ServiceCube() {
  const [rot, setRot] = useState({ x: -14, y: 22 });
  const [interacting, setInteracting] = useState(false);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef<{ x: number; y: number; rx: number; ry: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Continuous slow Y rotation when not being interacted with
  useEffect(() => {
    if (interacting || dragging) return;
    let raf: number;
    let last = performance.now();
    function tick(now: number) {
      const dt = (now - last) / 1000;
      last = now;
      setRot((r) => ({ x: r.x, y: r.y + dt * 14 }));
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [interacting, dragging]);

  // Cursor-follow rotation while hovering (not dragging)
  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (dragging) return;
    if (!interacting) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setRot((r) => ({
      x: -14 + py * -25,
      y: r.y + px * 1.4, // additive nudge so the spin doesn't snap
    }));
  }

  // Drag to rotate
  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    setDragging(true);
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      rx: rot.x,
      ry: rot.y,
    };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }
  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragging || !dragStart.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    setRot({
      x: dragStart.current.rx + dy * -0.4,
      y: dragStart.current.ry + dx * 0.5,
    });
  }
  function onPointerUp(e: React.PointerEvent<HTMLDivElement>) {
    setDragging(false);
    dragStart.current = null;
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
  }

  // Snap to a specific face by index (0=front, 1=right, 2=back, 3=left)
  function snapTo(faceIndex: number) {
    setRot({ x: -14, y: -faceIndex * 90 });
  }

  return (
    <div className="grid grid-cols-12 gap-10 lg:gap-20 items-center">
      {/* Cube column */}
      <div className="col-span-12 lg:col-span-7 relative flex items-center justify-center min-h-[560px] lg:min-h-[680px]">
        <div
          aria-hidden
          className="absolute left-1/2 -translate-x-1/2 bottom-4 lg:bottom-10 w-3/4 h-14 rounded-[50%] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(212,176,97,0.22), transparent 70%)",
            filter: "blur(12px)",
          }}
        />

        <div
          ref={containerRef}
          className="relative cursor-grab active:cursor-grabbing select-none scale-[0.65] sm:scale-[0.78] md:scale-90 lg:scale-100"
          style={{
            width: CUBE_SIZE,
            height: CUBE_SIZE,
            perspective: 2000,
          }}
          onMouseEnter={() => setInteracting(true)}
          onMouseLeave={() => setInteracting(false)}
          onMouseMove={onMove}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        >
          <motion.div
            className="absolute inset-0"
            animate={{ rotateX: rot.x, rotateY: rot.y }}
            transition={{ duration: dragging ? 0 : 0.4, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {services.map((s, i) => (
              <CubeFace
                key={s.n}
                transform={`rotateY(${i * 90}deg) translateZ(${HALF}px)`}
              >
                <ServiceFaceContent service={s} onOpen={() => navigate(s.to)} />
              </CubeFace>
            ))}

            <CubeFace
              transform={`rotateX(90deg) translateZ(${HALF}px)`}
              ornamental
            >
              <BrandFaceContent line="Amara" />
            </CubeFace>

            <CubeFace
              transform={`rotateX(-90deg) translateZ(${HALF}px)`}
              ornamental
            >
              <BrandFaceContent line="Digital" italic />
            </CubeFace>
          </motion.div>
        </div>

        <p className="absolute bottom-0 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.32em] text-ivory/35 whitespace-nowrap">
          ◆ drag · click a face · or tap below
        </p>
      </div>

      {/* Service face navigator — fills the space CtaStrip used to occupy */}
      <div className="col-span-12 lg:col-span-5 space-y-4 md:space-y-5">
        {services.map((s, i) => (
          <FaceButton
            key={s.n}
            service={s}
            index={i}
            onClick={() => snapTo(i)}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Single cube face wrapper ─────────────────────────────────── */

function CubeFace({
  transform,
  children,
  ornamental,
}: {
  transform: string;
  children: React.ReactNode;
  ornamental?: boolean;
}) {
  return (
    <div
      className={`absolute inset-0 rounded-2xl border-2 ${
        ornamental ? "border-gold/30" : "border-gold/55"
      } bg-[#0b0a09] overflow-hidden`}
      style={{
        transform,
        backfaceVisibility: "hidden",
        boxShadow:
          "inset 0 0 80px rgba(212,176,97,0.12), 0 0 40px rgba(0,0,0,0.5)",
      }}
    >
      {/* LED matrix — flickering gold dots in a tight grid */}
      <LEDMatrix />
      {children}
    </div>
  );
}

/* LEDMatrix — fills the face with a grid of gold dots. A handful
   flicker on randomized cycles so the cube reads as a working LED
   panel rather than a static print. */
function LEDMatrix() {
  const COLS = 18;
  const ROWS = 18;
  const lit = useMemo(() => {
    // Mark ~1 in 9 dots as 'live' (will flicker)
    const set = new Set<number>();
    for (let i = 0; i < COLS * ROWS; i++) {
      if ((i * 37 + 11) % 9 === 0) set.add(i);
    }
    return set;
  }, []);

  const cells = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const i = r * COLS + c;
      const isLit = lit.has(i);
      cells.push(
        <span
          key={i}
          aria-hidden
          className={`block rounded-full ${
            isLit ? "bg-gold" : "bg-gold/25"
          }`}
          style={{
            width: 4,
            height: 4,
            boxShadow: isLit ? "0 0 6px rgba(212,176,97,0.85)" : "none",
            animation: isLit
              ? `ledFlicker ${2.5 + (i % 7) * 0.4}s ease-in-out ${(i % 11) * 0.18}s infinite`
              : undefined,
          }}
        />
      );
    }
  }

  return (
    <div
      aria-hidden
      className="absolute inset-0 grid pointer-events-none p-3"
      style={{
        gridTemplateColumns: `repeat(${COLS}, 1fr)`,
        gridTemplateRows: `repeat(${ROWS}, 1fr)`,
        gap: "2px",
        placeItems: "center",
      }}
    >
      {cells}
    </div>
  );
}

/* Service face content — shown on the four side faces. */
function ServiceFaceContent({
  service,
  onOpen,
}: {
  service: (typeof services)[number];
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      className="absolute inset-6 md:inset-8 flex flex-col p-6 md:p-8 text-left group focus:outline-none rounded-xl backdrop-blur-sm bg-midnight/72 border border-gold/25"
    >
      <div className="flex items-center justify-between mb-7 font-mono text-[10px] uppercase tracking-[0.28em]">
        <span className="text-gold">{service.n}</span>
        <span className="text-ivory/40">{service.short}</span>
      </div>
      <h3 className="font-display font-light text-3xl md:text-5xl leading-[0.96] tracking-[-0.01em] text-ivory mb-6 transition-transform duration-500 group-hover:translate-x-1">
        {service.t}
      </h3>
      <p className="text-ivory/65 text-sm leading-relaxed mb-6">
        {service.body}
      </p>
      <ul className="space-y-2 text-[12px] text-ivory/55 mb-auto">
        {service.bullets.slice(0, 3).map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="mt-1.5 size-1 rounded-full bg-gold shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <span className="mt-6 pt-5 border-t border-gold/15 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] font-medium text-gold">
        Open service
        <span
          aria-hidden
          className="transition-transform duration-300 group-hover:translate-x-2"
        >
          →
        </span>
      </span>
    </button>
  );
}

/* Brand face content — shown on top + bottom faces. */
function BrandFaceContent({
  line,
  italic,
}: {
  line: string;
  italic?: boolean;
}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <span
        className={`font-couture ${
          italic ? "italic gold" : "text-ivory"
        } text-5xl md:text-7xl tracking-[-0.005em]`}
      >
        {line}
      </span>
    </div>
  );
}

/* ─── Face navigator buttons (right column) ────────────────────── */

function FaceButton({
  service,
  index,
  onClick,
}: {
  service: (typeof services)[number];
  index: number;
  onClick: () => void;
}) {
  return (
    <div className="flex items-stretch gap-3 md:gap-4">
      <button
        onClick={onClick}
        className="group flex-1 card flex items-center gap-5 md:gap-6 p-6 md:p-7 hover:border-gold transition-colors text-left"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold w-10 shrink-0">
          0{index + 1}
        </span>
        <div className="flex-1">
          <h4 className="font-display text-2xl md:text-3xl text-ivory leading-tight">
            {service.t}
          </h4>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ivory/45 mt-1.5">
            {service.short}
          </p>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold/70 group-hover:text-gold transition-colors whitespace-nowrap">
          rotate →
        </span>
      </button>
      <Link
        to={service.to}
        className="card px-5 md:px-6 flex items-center justify-center text-gold hover:border-gold transition-colors"
        aria-label={`Open ${service.t}`}
      >
        <span className="text-xl">↗</span>
      </Link>
    </div>
  );
}
