'use client';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { content } from '../data';

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  return (
    <section ref={containerRef} className="py-40 bg-transparent min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-bold gradient-text inline-block"
          >
            Journey
          </motion.h2>
          <p className="text-gray-500 mt-4 tracking-[0.4em] uppercase text-sm">Professional Path</p>
        </div>

        <div className="max-w-4xl mx-auto relative whitespace-normal">
          {/* Animated SVG Path */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2" />
          <motion.div 
            style={{ 
              height: useTransform(pathLength, [0, 1], ["0%", "100%"]),
              opacity: useTransform(pathLength, [0, 0.1], [0, 1])
            }}
            className="absolute left-6 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 md:-translate-x-1/2 origin-top"
          />

          {content.experience.roles.map((role, idx) => (
            <div key={idx} className={`relative mb-32 flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
              {/* Timeline Node */}
              <motion.div 
                 initial={{ scale: 0 }}
                 whileInView={{ scale: 1 }}
                 transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                 className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-indigo-500 z-20 md:-translate-x-1/2 shadow-[0_0_20px_rgba(99,102,241,0.8)]" 
              />

              <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-[32px] hover:bg-white/[0.05] transition-all"
                >
                  <span className="text-indigo-400 font-bold tracking-widest text-xs uppercase mb-2 block">{role.period}</span>
                  <h3 className="text-3xl font-bold text-white mb-2">{role.company}</h3>
                  <h4 className="text-lg text-gray-300 mb-6">{role.role}</h4>
                  
                  <ul className={`space-y-4 text-gray-400 text-sm leading-relaxed ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    {role.responsibilities.map((res, i) => (
                      <li key={i} className="flex gap-3 items-start justify-start md:justify-end">
                         {idx % 2 !== 0 && <div className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />}
                         <span>{res}</span>
                         {idx % 2 === 0 && <div className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
