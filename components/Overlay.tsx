"use client";

import { useRef, useEffect } from "react";
import SectionItem from "./SectionItem";
import { OverlayProps } from "./types";

export default function Overlay({
  sections,
  activeIndex,
  onSectionChange,
}: OverlayProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Intersection Observer for scroll detection
  useEffect(() => {
    const observerOptions = {
      root: scrollContainerRef.current,
      rootMargin: "0px",
      threshold: 0.5, // 50% visibility triggers active state
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(
            entry.target as HTMLDivElement
          );
          if (index !== -1 && index !== activeIndex) {
            onSectionChange(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [activeIndex, onSectionChange]);

  return (
    <div
      ref={scrollContainerRef}
      className="
        w-full h-full overflow-y-auto overflow-x-hidden
        snap-y snap-mandatory
        custom-scrollbar
        pointer-events-auto
      "
    >
      {sections.map((section, index) => (
        <div
          key={section.id}
          ref={(el) => {
            sectionRefs.current[index] = el;
          }}
          className="snap-section"
        >
          <SectionItem section={section} isActive={activeIndex === index} />
        </div>
      ))}
    </div>
  );
}
