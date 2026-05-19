"use client";
import { useRef, useState, useEffect, type ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-in";
  delay?: number;
  className?: string;
}

export function AnimateIn({ children, animation = "fade-in", delay = 0, className }: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: animation === "fade-up" ? `translateY(${visible ? 0 : 24}px)` : "none",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
