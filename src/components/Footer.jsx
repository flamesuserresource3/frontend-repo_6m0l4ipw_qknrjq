import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#06060c]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(217,70,239,0.08),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Let’s build something exceptional</h3>
            <p className="mt-3 text-white/70 max-w-xl">
              Share your goals — we’ll turn them into a fast, elegant, and scalable product. Expect senior craftsmanship and clear communication.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4 text-white/80">
              <div className="flex items-center gap-2"><Mail className="h-4 w-4" /><span>hello@blueflame.dev</span></div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4" /><span>+1 (555) 012‑3456</span></div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /><span>Remote • Worldwide</span></div>
            </div>
          </div>

          <form className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input className="mt-1 w-full rounded-lg border border-white/10 bg-[#0b0b13] px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-white/10 bg-[#0b0b13] px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="jane@company.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-white/70">Project brief</label>
              <textarea rows={4} className="mt-1 w-full rounded-lg border border-white/10 bg-[#0b0b13] px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Tell us about your product, timeline, and goals" />
            </div>
            <button type="button" className="mt-5 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-4 py-3 font-medium text-white shadow-lg shadow-cyan-500/20 hover:shadow-fuchsia-600/25">Request proposal</button>
            <p className="mt-3 text-xs text-white/50">We usually respond within 1 business day.</p>
          </form>
        </motion.div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50 text-sm">
          <div>© {new Date().getFullYear()} BlueFlame Software. Since 2019.</div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-white">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
