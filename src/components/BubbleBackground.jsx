import { motion } from 'framer-motion';

export default function BubbleBackground({ count = 15, color = "#64FFDA" }) {

  const bubbles = Array.from({ length: count }).map((_, i) => ({
    id: i,
    size: Math.random() * 30 + 10,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 15 + 10,
    y: Math.random() * 100,
    opacity: Math.random() * 0.3 + 0.1
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map(bubble => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            top: `${bubble.y}%`,
            opacity: bubble.opacity,
            border: `1px solid ${color}`
          }}
          initial={{ y: 0 }}
          animate={{ 
            y: [0, -100, -200],
            opacity: [bubble.opacity, bubble.opacity * 1.5, 0]
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear'
          }}
        />
      ))}
    </div>
  );
}