import { motion } from "framer-motion";

interface AnimatedLogoProps {
  size?: number;
  className?: string;
}

const AnimatedLogo = ({ size = 48, className = "" }: AnimatedLogoProps) => {
  const circleSize = size * 0.4;
  const offset = size * 0.15;

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        className="absolute rounded-full bg-brand-teal/80"
        style={{ width: circleSize, height: circleSize, top: 0, left: offset }}
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0 }}
      />
      <motion.div
        className="absolute rounded-full bg-brand-orange/80"
        style={{ width: circleSize, height: circleSize, top: offset, right: 0 }}
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
      />
      <motion.div
        className="absolute rounded-full bg-brand-pink/80"
        style={{ width: circleSize, height: circleSize, bottom: 0, left: offset }}
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
      />
      <motion.div
        className="absolute rounded-full bg-brand-purple/80"
        style={{ width: circleSize, height: circleSize, bottom: offset, left: 0 }}
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
      />
    </motion.div>
  );
};

export default AnimatedLogo;
