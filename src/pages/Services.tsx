import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageTransition, { PageHeader } from "../components/PageTransition";
import CtaStrip from "../sections/CtaStrip";
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

      <section className="section bg-midnight">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <ServiceCube />
        </div>
      </section>

      <CtaStrip />
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

const CUBE_SIZE = 360; // px — also the per-face width/height
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
    <div className="grid grid-cols-12 gap-10 md:gap-16 items-center">
      {/* Cube column */}
      <div className="col-span-12 lg:col-span-7 relative flex items-center justify-center min-h-[440px] md:min-h-[520px]">
        {/* Soft floor reflection */}
        <div
          aria-hidden
          className="absolute left-1/2 -translate-x-1/2 bottom-2 md:bottom-8 w-3/4 h-12 rounded-[50%] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(212,176,97,0.18), transparent 70%)",
            filter: "blur(10px)",
          }}
        />

        <div
          ref={containerRef}
          className="relative cursor-grab active:cursor-grabbing select-none"
          style={{
            width: CUBE_SIZE,
            height: CUBE_SIZE,
            perspective: 1600,
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
            {/* Four service faces around the Y axis */}
            {services.map((s, i) => (
              <CubeFace
                key={s.n}
                transform={`rotateY(${i * 90}deg) translateZ(${HALF}px)`}
              >
                <ServiceFaceContent service={s} onOpen={() => navigate(s.to)} />
              </CubeFace>
            ))}

            {/* Top brand face */}
            <CubeFace
              transform={`rotateX(90deg) translateZ(${HALF}px)`}
              ornamental
            >
              <BrandFaceContent line="Amara" />
            </CubeFace>

            {/* Bottom brand face */}
            <CubeFace
              transform={`rotateX(-90deg) translateZ(${HALF}px)`}
              ornamental
            >
              <BrandFaceContent line="Digital" italic />
            </CubeFace>
          </motion.div>
        </div>

        {/* Drag hint */}
        <p className="absolute bottom-0 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.32em] text-ivory/35 whitespace-nowrap">
          ◆ drag · click a face · or tap below
        </p>
      </div>

      {/* Service face navigator + active info */}
      <div className="col-span-12 lg:col-span-5">
        <div className="space-y-3">
          {services.map((s, i) => (
            <FaceButton
              key={s.n}
              service={s}
              onClick={() => snapTo(i)}
            />
          ))}
        </div>
        <div className="mt-10 pt-10 border-t border-gold/15">
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold mb-3">
            ◆ tip
          </p>
          <p className="text-ivory/55 text-sm leading-relaxed max-w-md">
            Click and drag the cube to inspect any side. Each face is a
            full service brief — click into the cube face or use the
            list above to dive in.
          </p>
        </div>
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
      className={`absolute inset-0 rounded-2xl border ${
        ornamental ? "border-gold/25" : "border-gold/45"
      } bg-midnight overflow-hidden`}
      style={{
        transform,
        backfaceVisibility: "hidden",
        boxShadow:
          "inset 0 0 60px rgba(212,176,97,0.08), 0 0 30px rgba(0,0,0,0.4)",
      }}
    >
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(212,176,97,0.45) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {children}
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
      className="absolute inset-0 flex flex-col p-7 md:p-9 text-left group focus:outline-none"
    >
      <div className="flex items-center justify-between mb-6 font-mono text-[10px] uppercase tracking-[0.28em]">
        <span className="text-gold">{service.n}</span>
        <span className="text-ivory/40">{service.short}</span>
      </div>
      <h3 className="font-display font-light text-3xl md:text-5xl leading-[0.96] tracking-[-0.01em] text-ivory mb-5 transition-transform duration-500 group-hover:translate-x-1">
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
  onClick,
}: {
  service: (typeof services)[number];
  onClick: () => void;
}) {
  return (
    <div className="flex items-stretch gap-3">
      <button
        onClick={onClick}
        className="group flex-1 card flex items-center gap-5 p-5 hover:border-gold transition-colors"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold w-8 shrink-0">
          {service.n}
        </span>
        <div className="flex-1 text-left">
          <h4 className="font-display text-xl text-ivory leading-tight">
            {service.t}
          </h4>
          <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-ivory/40 mt-1">
            {service.short}
          </p>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold/70 group-hover:text-gold transition-colors">
          rotate →
        </span>
      </button>
      <Link
        to={service.to}
        className="card px-5 flex items-center justify-center text-gold hover:border-gold transition-colors"
        aria-label={`Open ${service.t}`}
      >
        <span className="text-lg">↗</span>
      </Link>
    </div>
  );
}
