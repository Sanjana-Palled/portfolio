'use client';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { content } from '../data';
import { Activity, Smartphone, ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.9]);

  const springX = useSpring(0, { stiffness: 100, damping: 30 });
  const springY = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      springX.set((e.clientX / window.innerWidth - 0.5) * 40);
      springY.set((e.clientY / window.innerHeight - 0.5) * 40);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [springX, springY]);

  return (
    <section 
      ref={containerRef}
      className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-transparent pt-20"
    >
      {/* Decorative spotlight that follows mouse */}
      <motion.div 
        style={{ x: springX, y: springY }}
        className="absolute inset-[-20%] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_50%)] z-0 pointer-events-none"
      />

      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 backdrop-blur-md text-indigo-400 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Currently Engineering Health-Tech
        </motion.div>

        <h1 className="flex flex-col items-center md:flex-row gap-4 md:gap-0 leading-[0.85] tracking-tighter">
          <motion.span 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[17vw] md:text-[13vw] font-black text-white"
          >
            Sanjana
          </motion.span>
          
          <motion.div 
            initial={{ scale: 0, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "backOut" }}
            className="w-[14vw] h-[17vw] md:w-[9vw] md:h-[12vw] mx-8 bg-indigo-600 rounded-[2.5rem] overflow-hidden relative group shadow-[0_0_50px_rgba(99,102,241,0.3)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 group-hover:scale-125 transition-transform duration-1000" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Activity className="text-white w-1/2 h-1/2 animate-pulse" />
            </div>
          </motion.div>

          <motion.span 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[17vw] md:text-[13vw] font-black gradient-text"
          >
            Palled
          </motion.span>
        </h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 max-w-2xl text-lg md:text-2xl text-gray-400 font-light leading-relaxed px-4"
        >
          Specializing in <span className="text-white font-medium">Healthcare-focused Flutter Applications</span>, 
          bridging the gap between medical device technology and seamless user experiences.
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1.3 }}
           className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-gray-400">
            <Smartphone size={14} className="text-indigo-400" /> Flutter Developer
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-gray-400">
            <Activity size={14} className="text-pink-400" /> Health Industry
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-4 opacity-30 hover:opacity-100 transition-opacity cursor-pointer">
             <span className="text-[10px] uppercase tracking-[0.5em] text-white">Discover More</span>
             <ChevronDown className="animate-bounce" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
