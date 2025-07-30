import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorFollower() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  // Smooth motion values for the cursor
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { stiffness: 500, damping: 30 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const move = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add hover detection for interactive elements
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
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{ x, y }}
    >
      {/* Main cursor dot */}
      <motion.div
        className="w-3 h-3 rounded-full bg-[#64FFDA] shadow-lg shadow-[#64FFDA]/30"
        animate={{
          scale: isHovering ? 2 : (isClicking ? 0.8 : 1),
          opacity: isHovering ? 1 : 0.8,
          backgroundColor: isHovering ? '#FF6B6B' : '#64FFDA'
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 15 }}
      />
      
      {/* Outer ring with trail effect */}
      <motion.div
        className="absolute top-0 left-0 border-2 border-[#64FFDA] rounded-full pointer-events-none"
        initial={{ width: 24, height: 24, x: -6, y: -6 }}
        animate={{
          width: isHovering ? 40 : 24,
          height: isHovering ? 40 : 24,
          x: isHovering ? -12 : -6,
          y: isHovering ? -12 : -6,
          opacity: isHovering ? 0.8 : 0.3,
          borderColor: isHovering ? '#FF6B6B' : '#64FFDA',
          scale: isClicking ? 0.9 : 1
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
      
      {/* Hover effect particles */}
      {isHovering && (
        <motion.div
          className="absolute top-0 left-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#FF6B6B]"
              initial={{ x: 0, y: 0, opacity: 1 }}
              animate={{
                x: Math.random() * 20 - 10,
                y: Math.random() * 20 - 10,
                opacity: 0
              }}
              transition={{ 
                duration: 0.6,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}