import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface CardStackProps {
  children: React.ReactNode;
  className?: string;
  index: number;
}

export default function CardStack({
  children,
  className,
  index,
}: CardStackProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        scale,
        opacity,
      }}
      className={cn(
        "w-full min-h-screen relative z-10",
        index === 0 ? "mt-0" : "-mt-[90vh]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
