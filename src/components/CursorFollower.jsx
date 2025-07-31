import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorFollower() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false); 


  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { stiffness: 500, damping: 30 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {

    const screenWidth = window.innerWidth;
    if (screenWidth < 768) { 
      setIsMobile(true);
      return;
    }

    const move = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, [data-cursor-hover]'
    );

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleLeave);
    });

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, [cursorX, cursorY]);

  // 👇 إذا الهاتف أو التابلت، رجّع والو
  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ x, y }}
    >
      <motion.div
        className="w-4 h-4 rounded-full bg-[#64FFDA]"
        animate={{
          scale: isHovering ? 1.8 : (isClicking ? 0.7 : 1),
          opacity: isHovering ? 1 : 0.9,
          backgroundColor: isHovering ? '#FF6B6B' : '#64FFDA'
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 15,
          scale: { duration: 0.15 }
        }}
      />
      
      <motion.div
        className="absolute top-0 left-0 border border-[#64FFDA] rounded-full pointer-events-none"
        initial={{
          width: 32,
          height: 32,
          x: -12,
          y: -12,
          opacity: 0
        }}
        animate={{
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          x: isHovering ? -18 : -12,
          y: isHovering ? -18 : -12,
          opacity: isClicking ? 0.6 : 0.3,
          borderWidth: isHovering ? 1.5 : 1,
          borderColor: isHovering ? '#FF6B6B' : '#64FFDA',
          scale: isClicking ? 0.85 : 1
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
          opacity: { duration: 0.2 }
        }}
      />

      {isClicking && (
        <motion.div
          className="absolute top-0 left-0 border border-[#ff0000] rounded-full"
          initial={{
            width: 20,
            height: 20,
            x: -6,
            y: -6,
            opacity: 0.8
          }}
          animate={{
            width: 60,
            height: 60,
            x: -26,
            y: -26,
            opacity: 0
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut"
          }}
        />
      )}
    </motion.div>
  );
}
