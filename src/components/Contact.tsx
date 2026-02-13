'use client';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone } from 'lucide-react';
import { content } from '../data';

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 text-center z-10">
        <motion.h2 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-bold mb-12 gradient-text"
        >
          Let's Work Together
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-16">
          <a href={`mailto:${content.contact.email}`} className="group flex flex-col items-center gap-4 p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-all w-64">
            <div className="p-4 bg-indigo-500/20 rounded-full group-hover:bg-indigo-500 group-hover:text-white transition-colors">
              <Mail size={32} />
            </div>
            <span className="text-gray-400 group-hover:text-white transition-colors">Email Me</span>
          </a>

          <a href={content.contact.linkedin} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-4 p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-all w-64">
            <div className="p-4 bg-blue-500/20 rounded-full group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <Linkedin size={32} />
            </div>
            <span className="text-gray-400 group-hover:text-white transition-colors">LinkedIn</span>
          </a>

          <a href={`tel:${content.contact.phone}`} className="group flex flex-col items-center gap-4 p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-all w-64">
            <div className="p-4 bg-green-500/20 rounded-full group-hover:bg-green-500 group-hover:text-white transition-colors">
              <Phone size={32} />
            </div>
            <span className="text-gray-400 group-hover:text-white transition-colors">Call Me</span>
          </a>
        </div>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Sanjana C Palled. All rights reserved.
        </p>
      </div>
    </section>
  );
}
