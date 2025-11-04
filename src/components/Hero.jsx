import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Award, Sparkles } from 'lucide-react';

const Stat = ({ icon: Icon, label, value }) => (
  <motion.div
    className="flex items-center gap-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 px-4 py-3"
    initial={{ y: 10, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 text-cyan-300">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <div className="text-sm text-white/60">{label}</div>
      <div className="font-semibold text-white">{value}</div>
    </div>
  </motion.div>
);

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(217,70,239,0.15),transparent_40%)]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070711] via-[#070711]/60 to-transparent" />
      </div>

      <div className="relative z-10">
        <header className="max-w-7xl mx-auto flex items-center justify-between px-6 pt-6">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500" />
            <div className="font-semibold tracking-tight text-white text-lg">BlueFlame Software</div>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:flex items-center gap-6 text-white/80"
          >
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </motion.nav>
        </header>

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-28">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/75 backdrop-blur-md"
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
              Since 2019 • Certified Software House
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-white"
            >
              Elegant design. Best performance. Real business impact.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-5 text-lg md:text-xl leading-relaxed text-white/80"
            >
              We craft modern web, mobile, and cloud solutions with a relentless focus on user experience and speed. From concept to launch, we build products that scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-6 py-3 font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:shadow-fuchsia-600/25"
              >
                <Rocket className="h-5 w-5" /> Start a project
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/90 backdrop-blur-md hover:bg-white/10"
              >
                View our work
              </a>
            </motion.div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              <Stat icon={Shield} label="Security First" value="ISO-grade practices" />
              <Stat icon={Award} label="Certified Team" value="Senior engineers" />
              <Stat icon={Rocket} label="Performance" value=">99 Lighthouse" />
              <Stat icon={Sparkles} label="Design" value="Elegant & modern" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
