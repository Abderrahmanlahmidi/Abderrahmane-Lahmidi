import { useEffect, useState } from "react";
import {
  motion as Motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

export default function CursorFollower() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const x = useSpring(cursorX, { stiffness: 600, damping: 40 });
  const y = useSpring(cursorY, { stiffness: 600, damping: 40 });

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      setIsMobile(true);
      return;
    }

    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, [data-cursor-hover], .next-button-primary, .next-button-secondary, .next-card"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <Motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ x, y }}
    >
      <Motion.div
        className="motion-cursor-ring pointer-events-none rounded-full flex items-center justify-center border backdrop-blur-[2px]"
        initial={{ width: 20, height: 20, x: -10, y: -10 }}
        animate={{
          width: isHovering ? 60 : 20,
          height: isHovering ? 60 : 20,
          x: isHovering ? -30 : -10,
          y: isHovering ? -30 : -10,
          scale: isClicking ? 0.9 : 1,
          borderWidth: isHovering ? 1 : 1.5,
          borderColor: isHovering ? "var(--motion-yellow)" : "color-mix(in oklch, var(--motion-paper) 45%, transparent)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <Motion.div
          className="motion-cursor-dot rounded-full"
          animate={{
            width: isHovering ? 4 : 4,
            height: isHovering ? 4 : 4,
            opacity: isClicking ? 0 : 1,
          }}
        />
      </Motion.div>

      <AnimatePresence>
        {isClicking && (
          <Motion.div
            className="motion-cursor-pulse absolute top-0 left-0 rounded-full border"
            initial={{
              width: 20,
              height: 20,
              x: -10,
              y: -10,
              opacity: 0.5,
            }}
            animate={{
              width: 80,
              height: 80,
              x: -40,
              y: -40,
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
          />
        )}
      </AnimatePresence>
    </Motion.div>
  );
}
