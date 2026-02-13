'use client';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import { content } from '../data';

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "-20%" });
  const { scrollYProgress } = useScroll({ 
    target: containerRef, 
    offset: ["start end", "end start"] 
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="min-h-screen py-32 flex items-center justify-center relative perspective-[1000px]"
    >
      <motion.div 
        style={{ scale, opacity, rotateX }}
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
      >
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 gradient-text">
              {content.about.title}
            </h2>
            <div className="space-y-6 text-xl text-gray-400 leading-relaxed">
              <p>{content.about.text1}</p>
              <p className="text-white font-light">{content.about.text2}</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
             {[
               { label: "Experience", value: "3+ Years" },
               { label: "Focus", value: "Healthcare" },
               { label: "Platforms", value: "Android/iOS/macOS" },
               { label: "Location", value: "Karnataka" }
             ].map((stat, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-colors"
               >
                 <span className="block text-sm text-gray-500 uppercase tracking-widest mb-1">{stat.label}</span>
                 <span className="text-xl font-bold text-white">{stat.value}</span>
               </motion.div>
             ))}
          </div>
        </div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
           whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="relative aspect-square group"
        >
          {/* Decorative Card Stack Effect */}
          <div className="absolute top-4 left-4 w-full h-full bg-indigo-600/20 rounded-[40px] blur-xl group-hover:bg-indigo-600/30 transition-all duration-500" />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-[40px] rotate-3 group-hover:rotate-0 transition-transform duration-700" />
          
          <div className="absolute inset-1 bg-black rounded-[36px] overflow-hidden flex items-center justify-center p-12">
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
             <div className="z-10 text-center">
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="text-8xl mb-6"
                >
                  🚀
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-2">Standalone Apps</h3>
                <p className="text-gray-400">Mobile & Desktop Excellence</p>
             </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
