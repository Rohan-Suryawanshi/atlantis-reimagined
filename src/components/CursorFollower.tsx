import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const CursorFollower = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      gsap.to(cursor, {
        x: clientX - 4,
        y: clientY - 4,
        duration: 0.1,
        ease: "power2.out"
      });
      
      gsap.to(cursorOutline, {
        x: clientX - 15,
        y: clientY - 15,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseEnter = () => {
      gsap.to([cursor, cursorOutline], {
        scale: 1.5,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to([cursor, cursorOutline], {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    document.addEventListener('mousemove', moveCursor);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot" />
      <div ref={cursorOutlineRef} className="cursor-outline" />
    </>
  );
};