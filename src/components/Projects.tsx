'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Globe, Hotel, Landmark, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        title: 'Creación Web Empresa Tech',
        category: 'Desarrollo Web & SEO',
        description: 'Plataforma corporativa de alto rendimiento con diseño ultra-moderno, optimización SEO avanzada y arquitectura escalable.',
        image: '/projects/corporate.png',
        icon: Globe,
        tags: ['Next.js', 'Tailwind', 'IA SEO']
    },
    {
        title: 'Sistema de Reserva Hotelera',
        category: 'Automatización & UX',
        description: 'Ecosistema de reservas de lujo con gestión de disponibilidad en tiempo real, pagos integrados y panel administrativo elegante.',
        image: '/projects/hotel.png',
        icon: Hotel,
        tags: ['Booking System', 'Dashboard', 'Fintech']
    },
    {
        title: 'Sistema de Cobranza con IA',
        category: 'Sistemas Financieros IA',
        description: 'Solución inteligente para gestión de cartera vencida que utiliza modelos predictivos para automatizar recordatorios y negociaciones.',
        image: '/projects/fintech.png',
        icon: Landmark,
        tags: ['AI Analytics', 'Fintech Security', 'Automation']
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative overflow-hidden bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-2 glass px-4 py-1.5 rounded-full border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest"
                    >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Casos de Éxito</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-white"
                    >
                        Nuestros <span className="text-blue-500">Proyectos</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl mx-auto font-medium"
                    >
                        Explora las soluciones reales que hemos implementado para empresas que buscan liderar su mercado mediante la innovación tecnológica.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group glass rounded-[40px] overflow-hidden border-white/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col"
                        >
                            <div className="relative h-64 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-all z-10" />
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-6 left-6 z-20">
                                    <div className="glass px-4 py-2 rounded-2xl flex items-center space-x-2 text-white border-white/10">
                                        <project.icon className="w-4 h-4 text-blue-500" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">{project.category}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-10 space-y-6 flex-1 flex flex-col">
                                <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-slate-400 font-medium leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3 pt-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 bg-blue-600/10 text-blue-400 rounded-lg border border-blue-500/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-8 mt-auto">
                                    <button className="flex items-center space-x-2 text-white font-black uppercase tracking-widest text-[10px] group/btn">
                                        <span>Ver Detalles del Caso</span>
                                        <ExternalLink className="w-4 h-4 text-blue-500 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
