'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, X, Github, Cpu, Send, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="relative pt-24 pb-12 overflow-hidden bg-slate-950">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-900 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                                ¿Listo para escalar con <span className="text-blue-500">IA</span>?
                            </h2>
                            <p className="text-lg text-slate-400 font-medium">
                                Contáctanos hoy mismo para una consultoría gratuita sobre automatización y sistemas financieros personalizados.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {[
                                { icon: Mail, text: 'hello@yachayia.digital', label: 'Escríbenos' },
                                { icon: Phone, text: '+032 631594142 🇪🇸 - 0998754464 🇪🇨', label: 'Llámanos' },
                                { icon: MapPin, text: 'Salasaca - Tungurahua - Ecuador', label: 'Ubicación' }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center space-x-6 group cursor-default">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500/60 mb-1">{item.label}</p>
                                        <p className="text-xl font-bold text-white transition-colors group-hover:text-blue-400">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center space-x-4">
                            {[Facebook, Instagram, Linkedin, X, Github].map((Icon, i) => (
                                <Link key={i} href="#" className="w-12 h-12 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 transition-all">
                                    <Icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-10 rounded-[40px] border-white/5 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px]" />
                        <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-4">Nombre</label>
                                    <input type="text" placeholder="Tu Nombre" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-4">Email</label>
                                    <input type="email" placeholder="email@ejemplo.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-4">Servicio de Interés</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-all appearance-none cursor-pointer">
                                    <option className="bg-slate-900">Seleccionar...</option>
                                    <option className="bg-slate-900">Automatización IA</option>
                                    <option className="bg-slate-900">Web & SEO</option>
                                    <option className="bg-slate-900">Fintech Solutions</option>
                                    <option className="bg-slate-900">Chatbots GPT-4</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-4">Mensaje</label>
                                <textarea rows={4} placeholder="Cuéntanos sobre tu proyecto..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-all resize-none" />
                            </div>
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest text-sm py-5 rounded-2xl transition-all hover:scale-[1.02] shadow-[0_10px_30px_-10px_rgba(59,130,246,0.6)] flex items-center justify-center space-x-2">
                                <span>Enviar Propuesta</span>
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-slate-500 font-medium text-sm gap-8">
                    <div className="flex items-center space-x-3 group cursor-default">
                        <Cpu className="w-6 h-6 text-blue-500/50 group-hover:text-blue-500 transition-colors" />
                        <p>© {currentYear} YachayIA Digital. Todos los derechos reservados.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Política de Privacidad</Link>
                        <Link href="#" className="hover:text-white transition-colors">Términos de Servicio</Link>
                        <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
