import { useEffect, useState } from "react";
import {
  motion,
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
  const x = useSpring(cursorX, { stiffness: 500, damping: 30 });
  const y = useSpring(cursorY, { stiffness: 500, damping: 30 });

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
      "a, button, input, textarea, [data-cursor-hover]"
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
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ x, y }}
    >
      <motion.div
        className="rounded-full border pointer-events-none"
        style={{
          borderColor: isHovering ? "#FF6B6B" : "#64FFDA",
          borderWidth: isHovering ? 2 : 1,
          width: isHovering ? 45 : 40,
          height: isHovering ? 45 : 40,
          x: isHovering ? -28 : -20,
          y: isHovering ? -28 : -20,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "all 0.3s ease",
        }}
        animate={{
          scale: isClicking ? 0.85 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <motion.div
          className="rounded-full bg-[#64FFDA]"
          style={{
            width: 14,
            height: 14,
            position: "absolute",
            top: "50%",
            left: "50%",
            translateX: "-50%",
            translateY: "-50%",
            boxShadow: "none",
          }}
          animate={{
            scale: isClicking ? 0.7 : 1.1,
            backgroundColor: isClicking ? "#FF4757" : "#64FFDA",
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 20,
          }}
        />
      </motion.div>


      <AnimatePresence>
        {isClicking && (
          <motion.div
            className="absolute top-0 left-0 rounded-full border border-[#FF4757]"
            initial={{
              width: 20,
              height: 20,
              x: -10,
              y: -10,
              opacity: 0.8,
            }}
            animate={{
              width: 80,
              height: 80,
              x: -40,
              y: -40,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
