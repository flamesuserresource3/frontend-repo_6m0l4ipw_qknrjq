import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Gauge, Cpu } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Product Engineering',
    desc: 'Full‑stack web and mobile apps with clean architectures and pixel‑perfect UI.',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Gauge,
    title: 'Performance & Optimization',
    desc: 'We squeeze every millisecond. Core Web Vitals and Lighthouse scores above 95.',
    color: 'from-emerald-500 to-cyan-500',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'Scalable deployments on AWS, GCP, Azure with CI/CD, monitoring, and reliability.',
    color: 'from-fuchsia-500 to-violet-600',
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    desc: 'Intelligent automation, data pipelines, and AI-assisted workflows that deliver ROI.',
    color: 'from-amber-500 to-rose-500',
  },
];

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  show: (i) => ({ y: 0, opacity: 1, transition: { delay: 0.05 * i, duration: 0.6 } }),
};

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28 bg-[#0a0a12]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_45%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Services built for outcomes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 text-white/70 max-w-2xl"
        >
          We combine elegant design with engineering discipline to create reliable, scalable products.
        </motion.p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5"
            >
              <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${s.color} opacity-30 blur-2xl`} />
              <div className="relative z-[1]">
                <div className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${s.color} p-3 text-white shadow-lg shadow-black/20`}>
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.desc}</p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <button className="mt-4 text-sm font-medium text-cyan-300 group-hover:text-white transition">Learn more →</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
