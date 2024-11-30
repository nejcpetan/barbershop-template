"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AngleFontProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function AngleFont({
  text,
  className,
  delay = 0,
}: AngleFontProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn("font-mono tracking-wider", className)}
      style={{ fontFamily: "'Orbitron', sans-serif" }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: delay + i * 0.1 }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}
