import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
            4 options.{" "}
            <span className="gold italic">One outcome: growth.</span>
          </>
        }
        subtitle="Four services — engineered to bring you more attention, better leads, stronger branding, and more revenue. Run one as a standalone engagement, or stack them together as a complete program."
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

const CUBE_SIZE = 600; // px — large, premium, dominant
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
      <div className="col-span-12 lg:col-span-7 relative flex items-center justify-center min-h-[520px] sm:min-h-[600px] lg:min-h-[760px]">
        <div
          aria-hidden
          className="absolute left-1/2 -translate-x-1/2 bottom-4 lg:bottom-10 w-3/4 h-16 rounded-[50%] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,250,236,0.18) 0%, rgba(212,176,97,0.22) 30%, transparent 75%)",
            filter: "blur(14px)",
          }}
        />

        <div
          ref={containerRef}
          className="relative cursor-grab active:cursor-grabbing select-none scale-[0.5] sm:scale-[0.65] md:scale-75 lg:scale-95 xl:scale-100"
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
      className={`absolute inset-0 rounded-2xl overflow-hidden ${
        ornamental ? "cube-led-face-dim" : "cube-led-face"
      }`}
      style={{
        transform,
        backfaceVisibility: "hidden",
        background:
          "linear-gradient(135deg, rgba(15,13,11,0.96) 0%, rgba(11,10,9,0.94) 50%, rgba(21,18,14,0.96) 100%)",
      }}
    >
      {/* Mirror-glass sheen — diagonal highlight that reads as
          reflective surface */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,250,236,0.06) 0%, transparent 35%, transparent 65%, rgba(212,176,97,0.05) 100%)",
        }}
      />

      {/* Inner LED frame — tight white edge inside the bezel for the
          'lighted mirror' depth */}
      <div
        aria-hidden
        className="absolute inset-3 rounded-xl pointer-events-none"
        style={{
          border: "1px solid rgba(255, 250, 236, 0.32)",
          boxShadow:
            "inset 0 0 24px rgba(255,250,236,0.08), 0 0 12px rgba(255,250,236,0.18)",
        }}
      />

      {/* Sparse LED corner pixels — quiet rhythm so the panel feels
          alive without a busy dot matrix */}
      <CornerPixels />

      {children}
    </div>
  );
}

/* Minimal corner pixel grid — four small lit dots in each corner. */
function CornerPixels() {
  const corners = [
    { top: "10px", left: "10px" },
    { top: "10px", right: "10px" },
    { bottom: "10px", left: "10px" },
    { bottom: "10px", right: "10px" },
  ];
  return (
    <>
      {corners.map((c, i) => (
        <span
          key={i}
          aria-hidden
          className="absolute size-1 rounded-full"
          style={{
            ...c,
            background: "#FFFAEC",
            boxShadow:
              "0 0 6px rgba(255,250,236,0.95), 0 0 12px rgba(212,176,97,0.55)",
            animation: `ledFlicker ${3 + (i % 3) * 0.5}s ease-in-out ${i * 0.3}s infinite`,
          }}
        />
      ))}
    </>
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
      className="absolute inset-8 md:inset-10 flex flex-col text-left group focus:outline-none overflow-hidden"
    >
      {/* Top — number badge only, no rotating subtitle */}
      <div className="flex items-center justify-between mb-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold">
          {service.n}
        </span>
        <span
          aria-hidden
          className="size-1.5 rounded-full bg-[#FFFAEC]"
          style={{
            boxShadow:
              "0 0 6px rgba(255,250,236,0.95), 0 0 14px rgba(212,176,97,0.6)",
            animation: "ledFlicker 3.4s ease-in-out infinite",
          }}
        />
      </div>

      <h3 className="font-couture font-normal text-4xl md:text-[3.2rem] leading-[1.0] tracking-[-0.005em] text-ivory mb-6 transition-transform duration-500 group-hover:translate-x-1">
        {service.t}
      </h3>

      <p className="text-ivory/65 text-[13.5px] md:text-[14.5px] leading-relaxed mb-6 line-clamp-4">
        {service.body}
      </p>

      <ul className="space-y-2 text-[12.5px] text-ivory/55 mb-auto">
        {service.bullets.slice(0, 3).map((b) => (
          <li key={b} className="flex items-start gap-2.5">
            <span className="mt-1.5 size-1 rounded-full bg-gold shrink-0" />
            <span className="truncate">{b}</span>
          </li>
        ))}
      </ul>

      <span className="mt-6 pt-5 border-t border-gold/20 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] font-medium text-gold">
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
        } text-6xl md:text-8xl tracking-[-0.005em]`}
        style={{
          textShadow: italic
            ? "0 0 22px rgba(212,176,97,0.6), 0 0 56px rgba(212,176,97,0.35)"
            : "0 0 22px rgba(255,250,236,0.45), 0 0 56px rgba(212,176,97,0.25)",
        }}
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
  const PROMISE = [
    "More attention",
    "Better leads",
    "Stronger branding",
    "More revenue",
  ][index];
  return (
    <div className="flex items-stretch gap-3 md:gap-4">
      <button
        onClick={onClick}
        className="group flex-1 card flex items-center gap-6 md:gap-8 p-7 md:p-8 hover:border-gold transition-colors text-left"
      >
        <span className="font-mono text-[12px] uppercase tracking-[0.32em] text-gold w-10 shrink-0">
          0{index + 1}
        </span>
        <div className="flex-1">
          <h4 className="font-couture font-normal text-3xl md:text-4xl text-ivory leading-[1.05] tracking-[-0.005em]">
            {service.t}
          </h4>
          <p className="text-ivory/50 text-[13px] mt-2 leading-relaxed">
            {PROMISE}.
          </p>
        </div>
      </button>
      <Link
        to={service.to}
        className="card px-6 md:px-7 flex items-center justify-center text-gold hover:border-gold transition-colors"
        aria-label={`Open ${service.t}`}
      >
        <span className="text-xl">↗</span>
      </Link>
    </div>
  );
}
