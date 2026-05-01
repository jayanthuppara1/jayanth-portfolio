'use client';

import { useEffect, useRef, ReactNode, useState } from 'react';
import { motion, useInView, MotionProps } from 'framer-motion';

/**
 * FadeInOnScroll - Fade and slide up when element enters viewport
 */
interface FadeInOnScrollProps extends MotionProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export function FadeInOnScroll({
  children,
  delay = 0,
  duration = 0.6,
  ...props
}: FadeInOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * SlideUpOnScroll - Slide up with stagger effect
 */
interface SlideUpOnScrollProps extends MotionProps {
  children: ReactNode;
  stagger?: number;
  delay?: number;
}

export function SlideUpOnScroll({
  children,
  stagger = 0.1,
  delay = 0,
  ...props
}: SlideUpOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.7,
        delay,
        staggerChildren: stagger,
        delayChildren: delay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * ScaleOnScroll - Scale and fade effect
 */
interface ScaleOnScrollProps extends MotionProps {
  children: ReactNode;
  delay?: number;
}

export function ScaleOnScroll({ children, delay = 0, ...props }: ScaleOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * CountUpAnimation - Count from 0 to target number
 */
interface CountUpAnimationProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function CountUpAnimation({
  from = 0,
  to,
  duration = 2,
  suffix = '',
  prefix = '',
  className = '',
}: CountUpAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    const step = (to - from) / (duration * 60);
    let current = from;

    const interval = setInterval(() => {
      current += step;
      if (current >= to) {
        setDisplayValue(to);
        clearInterval(interval);
      } else {
        setDisplayValue(Math.round(current));
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [isInView, from, to, duration]);

  return (
    <div ref={ref} className={className}>
      <span>
        {prefix}
        {displayValue}
        {suffix}
      </span>
    </div>
  );
}

/**
 * ParallaxScroll - Parallax effect based on scroll
 */
interface ParallaxScrollProps extends MotionProps {
  children: ReactNode;
  offset?: number;
  speed?: number;
}

export function ParallaxScroll({
  children,
  offset = 0,
  speed = 0.5,
  ...props
}: ParallaxScrollProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      style={{
        transform: `translateY(${scrollY * speed + offset}px)`,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerContainer - Container for staggered animations
 */
interface StaggerContainerProps extends MotionProps {
  children: ReactNode;
  stagger?: number;
  delay?: number;
}

export function StaggerContainer({
  children,
  stagger = 0.1,
  delay = 0,
  ...props
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerItem - Item for use inside StaggerContainer
 */
interface StaggerItemProps extends MotionProps {
  children: ReactNode;
}

export function StaggerItem({ children, ...props }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * FloatingElement - Floating animation (Y-axis oscillation)
 */
interface FloatingElementProps extends MotionProps {
  children: ReactNode;
  distance?: number;
  duration?: number;
  delay?: number;
}

export function FloatingElement({
  children,
  distance = 20,
  duration = 3,
  delay = 0,
  ...props
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{ y: [0, distance, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * RevealText - Text reveal animation (word by word)
 */
interface RevealTextProps extends MotionProps {
  text: string;
  className?: string;
  delay?: number;
}

export function RevealText({ text, className = '', delay = 0, ...props }: RevealTextProps) {
  const words = text.split(' ');

  return (
    <motion.div className={className} {...props}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: delay + i * 0.05 }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
