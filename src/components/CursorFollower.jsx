import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorFollower() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor-hover]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleLeave);
    });

    window.addEventListener('mousemove', move);

    return () => {
      window.removeEventListener('mousemove', move);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      animate={{ 
        x: cursorPos.x - (isHovering ? 16 : 12),
        y: cursorPos.y - (isHovering ? 16 : 12),
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 40 }}
    >
      {/* Main cursor dot with pulsing effect */}
      <motion.div
        className="w-3 h-3 rounded-full bg-[#64FFDA] shadow-lg shadow-[#64FFDA]/30"
        animate={{
          scale: isHovering ? 1.8 : 1,
          opacity: [0.8, 1, 0.8],
          transition: { 
            scale: { duration: 0.2 },
            opacity: { duration: 2, repeat: Infinity } 
          }
        }}
      />
      
      {/* Outer ring that follows with delay */}
      <motion.div
        className="absolute top-0 left-0 border-2 border-[#64FFDA]/50 rounded-full"
        initial={{ width: 24, height: 24, x: -6, y: -6 }}
        animate={{
          width: isHovering ? 32 : 24,
          height: isHovering ? 32 : 24,
          x: isHovering ? -8 : -6,
          y: isHovering ? -8 : -6,
          opacity: isHovering ? 0.8 : 0.4
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}