'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { content } from '../data';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, index, range, targetScale }: { project: any, index: number, range: [number, number], targetScale: number }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(scrollYProgress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 px-4 md:px-0">
      <motion.div 
        style={{ 
          scale,
          top: `calc(-5vh + ${index * 25}px)`
        }} 
        className="w-full max-w-[1000px] h-[70vh] md:h-[600px] bg-[#1a1a1a] rounded-[2.5rem] overflow-hidden relative border border-white/10 shadow-2xl"
      >
        <div className="flex flex-col md:grid md:grid-cols-2 h-full">
          <div className="p-8 md:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">0{index + 1}</span>
                <div className="h-[1px] w-8 bg-indigo-500/50" />
                <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">{project.platform}</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-2 uppercase tracking-tighter">
                {project.name.includes(' – ') ? project.name.split(' – ')[0] : project.name}
              </h3>
              <p className="text-indigo-400 font-medium mb-6 text-sm md:text-base uppercase tracking-widest">
                {project.tagline}
              </p>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech: string, i: number) => (
                  <span key={i} className="text-[10px] border border-white/10 px-3 py-1 rounded-full text-gray-500 uppercase font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              {project.links?.map((link: any, i: number) => (
                <a 
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-bold group"
                >
                  <span className="border-b-2 border-transparent group-hover:border-white transition-all">Visit project</span>
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-[#0a0a0a] relative overflow-hidden flex items-center justify-center p-8">
            <motion.div 
              style={{ scale: imageScale }}
              className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 mix-blend-overlay"
            />
            <div className="relative z-10 text-center">
              <div className="text-[12rem] font-black text-white/[0.03] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
                {index + 1}
              </div>
              <div className="text-6xl md:text-8xl filter grayscale group-hover:grayscale-0 transition-all duration-700">
                {index === 0 ? "💻" : index === 1 ? "🦷" : index === 2 ? "🎗" : "🧬"}
              </div>
               <p className="mt-4 text-xs tracking-[0.5em] text-gray-600 uppercase">Healthcare Innovation</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={containerRef} className="relative py-20 bg-transparent">
      <div className="mb-20 px-8 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
         <div>
           <h2 className="text-7xl md:text-[10vw] font-black text-white/5 uppercase leading-none">Cases</h2>
           <p className="text-2xl text-indigo-500 font-light -mt-4 ml-2">Selected Projects</p>
         </div>
         <p className="max-w-xs text-gray-500 text-sm leading-relaxed">
           Blending medical expertise with high-performance mobile and desktop engineering.
         </p>
      </div>

      <div className="relative">
        {content.projects.items.map((project, i) => {
          const targetScale = 1 - ((content.projects.items.length - i) * 0.05);
          return (
            <ProjectCard 
              key={i} 
              index={i} 
              project={project} 
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}
