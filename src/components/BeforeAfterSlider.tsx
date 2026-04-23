"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";

interface Props {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  caption?: string;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  caption,
}: Props) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    updatePosition(e.clientX);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  };
  const stopDrag = () => { dragging.current = false; };

  const onTouchStart = (e: React.TouchEvent) => {
    dragging.current = true;
    updatePosition(e.touches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!dragging.current) return;
    updatePosition(e.touches[0].clientX);
  };

  return (
    <figure style={{ margin: 0 }}>
      <div
        ref={containerRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={stopDrag}
        style={{
          position: "relative",
          aspectRatio: "4/3",
          overflow: "hidden",
          cursor: "col-resize",
          userSelect: "none",
          touchAction: "none",
        }}
      >
        {/* Before image — full base layer */}
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          style={{ objectFit: "cover", pointerEvents: "none" }}
          draggable={false}
        />

        {/* After image — clipped to reveal from handle rightward */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            clipPath: `inset(0 0 0 ${position}%)`,
          }}
        >
          <Image
            src={afterSrc}
            alt={afterAlt}
            fill
            style={{ objectFit: "cover", pointerEvents: "none" }}
            draggable={false}
          />
        </div>

        {/* Divider handle */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `${position}%`,
            transform: "translateX(-50%)",
            width: 2,
            background: "var(--gold)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "var(--gold)",
              color: "var(--ink)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              boxShadow: "0 2px 10px rgba(14,22,34,0.3)",
              flexShrink: 0,
            }}
          >
            ‹ ›
          </div>
        </div>

        {/* BEFORE badge */}
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            background: "var(--ink)",
            color: "var(--cream)",
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            padding: "4px 12px",
            borderRadius: 999,
            pointerEvents: "none",
          }}
        >
          Before
        </div>

        {/* AFTER badge */}
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: "var(--gold)",
            color: "var(--ink)",
            fontSize: 10,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            padding: "4px 12px",
            borderRadius: 999,
            pointerEvents: "none",
          }}
        >
          After
        </div>
      </div>

      {caption && (
        <figcaption
          style={{
            marginTop: 14,
            fontSize: 13,
            color: "var(--slate-2)",
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
