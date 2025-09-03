import React, { useRef, useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

/**
 * ScrollArea
 * Wrap long content with this. It provides:
 * - Native custom styled scrollbar (via global CSS above)
 * - Neon progress rail + animated orb that follows scroll (AI feel)
 *
 * Usage:
 * <ScrollArea className="h-[70vh]"> ... long content ... </ScrollArea>
 */

export default function ScrollArea({ children, className = "" }) {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0); // 0..1
  const smooth = useSpring(progress, { stiffness: 150, damping: 25 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const scrollTop = el.scrollTop;
      const maxScroll = el.scrollHeight - el.clientHeight;
      const p = maxScroll > 0 ? scrollTop / maxScroll : 0;
      setProgress(Number.isFinite(p) ? p : 0);
    };

    // Initial
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });

    // update on resize because sizes change
    const ro = new ResizeObserver(() => onScroll());
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, []);

  // derived values for rail/ orb sizes
  const [railHeight, setRailHeight] = useState(0);
  const [orbY, setOrbY] = useState(0);
  const orbSize = 18;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      const railTop = 12;
      const railBotPad = 12;
      const height = el.clientHeight - railTop - railBotPad;
      setRailHeight(Math.max(0, height));
      setOrbY((height - orbSize) * progress);
    };
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [progress]);

  // smooth spring subscription to update orb style reactively
  useEffect(() => {
    const unsub = smooth.onChange((v) => {
      setOrbY((railHeight - orbSize) * v);
    });
    return unsub;
  }, [smooth, railHeight]);

  return (
    <div className={`relative ${className}`}>
      {/* the scrollable native area */}
      <div
        ref={containerRef}
        className="overflow-auto max-h-full w-full pr-6 scrollbar-thin"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {children}
        {/* add small bottom padding so the orb reaches the end properly */}
        <div style={{ height: 24 }} />
      </div>

      {/* decorative right rail (only visible on larger screens via CSS) */}
      <div className="ai-scroll-rail" aria-hidden>
        <div
          className="ai-progress"
          style={{
            top: `${12 + (railHeight - (railHeight * Math.max(0.05, progress))) * progress}px`,
            height: `${Math.max(28, railHeight * Math.max(0.05, 1 - (1 - progress)))}px`,
            transform: `scaleY(${Math.max(0.05, progress)})`,
          }}
        />
      </div>

      {/* floating orb that follows scroll */}
      <motion.div
        className="ai-scroll-orb"
        style={{
          transform: `translateY(${orbY}px)`,
          right: 20,
          width: orbSize,
          height: orbSize,
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0.05)), linear-gradient(180deg, rgba(129,90,240,1), rgba(236,72,153,1))",
          boxShadow:
            "0 10px 30px rgba(129,90,240,0.22), 0 2px 8px rgba(0,0,0,0.35), inset 0 0 8px rgba(255,255,255,0.06)",
          borderRadius: 999,
        }}
        animate={{ scale: progress > 0 ? 1 : 0.85, opacity: progress > 0 || progress === 0 ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 160, damping: 18 }}
      />
    </div>
  );
}
