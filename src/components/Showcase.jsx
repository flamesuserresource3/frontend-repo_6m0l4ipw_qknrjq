import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const projects = [
  {
    title: 'Neobank Customer App',
    tag: 'Fintech • React Native • Node',
    gradient: 'from-cyan-500 via-blue-500 to-fuchsia-500',
    kpi: '2M+ users',
  },
  {
    title: 'Realtime Analytics Dashboard',
    tag: 'SaaS • Next.js • Timeseries',
    gradient: 'from-emerald-500 via-cyan-500 to-indigo-500',
    kpi: '99.99% uptime',
  },
  {
    title: 'Commerce Headless Platform',
    tag: 'E‑commerce • GraphQL • Edge',
    gradient: 'from-amber-500 via-rose-500 to-violet-600',
    kpi: '+38% conversion',
  },
];

export default function Showcase() {
  return (
    <section id="work" className="relative py-20 md:py-28 bg-[#070711]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08),transparent_45%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between gap-6 flex-wrap"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Selected work</h2>
            <p className="mt-3 text-white/70 max-w-2xl">A glimpse of products we shipped — fast, reliable, and beautiful.</p>
          </div>
          <div className="flex items-center gap-2 text-amber-300/90">
            <Star className="h-5 w-5" />
            <span className="text-sm">Average client rating 4.9/5</span>
          </div>
        </motion.div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-20`} />
              <div className="relative p-6">
                <div className="h-40 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white/60">
                  <span className="text-sm">Interactive preview</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70">{p.tag}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-cyan-300 text-sm font-medium">{p.kpi}</span>
                  <button className="text-sm text-white/80 hover:text-white transition">Case study →</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
