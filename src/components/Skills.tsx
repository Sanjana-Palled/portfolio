'use client';
import { motion } from 'framer-motion';
import { content } from '../data';
import { ShieldCheck, Cpu, Smartphone, MousePointer2 } from 'lucide-react';

const SkillItem = ({ skill, index }: { skill: string, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ scale: 1.05, rotate: 1, backgroundColor: "rgba(255,255,255,0.08)" }}
    className="px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between group cursor-default"
  >
    <span className="text-gray-300 group-hover:text-white transition-colors">{skill}</span>
    <MousePointer2 size={14} className="opacity-0 group-hover:opacity-100 text-indigo-500 transition-opacity" />
  </motion.div>
);

export default function Skills() {
  return (
    <section className="py-32 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
           <div className="max-w-2xl">
             <h2 className="text-6xl md:text-8xl font-bold text-white mb-6">Expertise</h2>
             <p className="text-xl text-gray-500">
               Versatile skill set focused on high-performance cross-platform development and medical-grade software solutions.
             </p>
           </div>
           <div className="flex gap-4">
              <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-500">
                <Cpu size={32} />
              </div>
              <div className="p-4 rounded-2xl bg-pink-500/10 border border-pink-500/20 text-pink-500">
                <Smartphone size={32} />
              </div>
           </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
           <div>
             <h3 className="text-xs uppercase tracking-[0.3em] text-indigo-500 font-bold mb-8">Base Technologies</h3>
             <div className="space-y-3">
               {content.skills.technical.map((s, i) => <SkillItem key={i} skill={s} index={i} />)}
             </div>
           </div>

           <div>
             <h3 className="text-xs uppercase tracking-[0.3em] text-pink-500 font-bold mb-8">Target Platforms</h3>
             <div className="space-y-3">
               {content.skills.platforms.map((s, i) => <SkillItem key={i} skill={s} index={i} />)}
             </div>
           </div>

           <div>
             <h3 className="text-xs uppercase tracking-[0.3em] text-purple-500 font-bold mb-8">Ecosystem Tools</h3>
             <div className="space-y-3">
               {content.skills.tools.map((s, i) => <SkillItem key={i} skill={s} index={i} />)}
             </div>
           </div>
        </div>
      </div>
      
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none opacity-[0.02] select-none">
        <span className="text-[30rem] font-black whitespace-nowrap leading-none italic">
          FLUTTER DART FIREBASE REST NEXTJS DJANGO SUPABASE
        </span>
      </div>
    </section>
  );
}
