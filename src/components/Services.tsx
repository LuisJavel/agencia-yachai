'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bot, Zap, Landmark, ArrowUpRight, X, CheckCircle2, Cpu, Globe, Shield, Code, Rocket } from 'lucide-react';

const services = [
    {
        title: 'Web & SEO con IA',
        description: 'Páginas web profesionales optimizadas con algoritmos de IA para un posicionamiento global imbatible.',
        icon: Search,
        color: 'blue',
        details: {
            summary: 'Desarrollamos ecosistemas digitales inteligentes que no solo lucen premium, sino que están configurados para dominar los motores de búsqueda mediante IA Generativa.',
            points: [
                { icon: Globe, text: 'Posicionamiento Orgánico Global' },
                { icon: Code, text: 'Arquitectura Next.js de alto rendimiento' },
                { icon: Search, text: 'Análisis de keywords mediante IA' }
            ]
        }
    },
    {
        title: 'Automatización a Medida',
        description: 'Flujos de trabajo robóticos que eliminan tareas repetitivas y aumentan la rentabilidad operativa.',
        icon: Zap,
        color: 'amber',
        details: {
            summary: 'Transformamos procesos manuales lentos en flujos de trabajo autónomos y eficientes que escalan tu negocio sin aumentar costos operativos.',
            points: [
                { icon: Zap, text: 'Integración avanzada con HubSpot/Zoho' },
                { icon: Bot, text: 'Bots de gestión de leads' },
                { icon: Rocket, text: 'Automatización de emails y seguimientos' }
            ]
        }
    },
    {
        title: 'Chatbots GPT-4',
        description: 'Asistentes virtuales inteligentes con saludo multilingüe y capacidad de cierre de ventas 24/7.',
        icon: Bot,
        color: 'blue',
        details: {
            summary: 'Diseñamos agentes conversacionales que entienden el contexto y la cultura de tu marca, brindando una atención al cliente de élite 24/7.',
            points: [
                { icon: Cpu, text: 'Modelos GPT-4 personalizados' },
                { icon: MessageSquare, text: 'Atención bilingüe nativa (Kichwa/Esp/Eng)' },
                { icon: CheckCircle2, text: 'Cierre de citas y ventas autónomo' }
            ]
        }
    },
    {
        title: 'Fintech AI Systems',
        description: 'Soluciones personalizadas para el sector financiero con seguridad OAuth2 y análisis predictivo.',
        icon: Landmark,
        color: 'indigo',
        details: {
            summary: 'Construimos sistemas robustos para el sector financiero que combinan seguridad de grado bancario con análisis de datos predictivos de última generación.',
            points: [
                { icon: Shield, text: 'Seguridad OAuth2 y cifrado avanzado' },
                { icon: Landmark, text: 'Dashboards de analítica predictiva' },
                { icon: Code, text: 'APIs escalables para banca digital' }
            ]
        }
    }
];

import { MessageSquare } from 'lucide-react';

export default function Services() {
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

    return (
        <section id="services" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-white"
                    >
                        Nuestros <span className="text-blue-500">Servicios</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl mx-auto font-medium"
                    >
                        Potenciamos negocios con tecnología de vanguardia y una visión centrada en la eficiencia y el aprendizaje continuo.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            onClick={() => setSelectedService(service)}
                            className="group relative p-8 glass rounded-3xl border-white/5 hover:border-blue-500/50 transition-all duration-300 overflow-hidden cursor-pointer"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl group-hover:bg-blue-600/10 transition-all" />

                            <div className="relative z-10">
                                <div className={`w-14 h-14 flex items-center justify-center rounded-2xl mb-6 transition-all duration-300 ${service.color === 'blue' ? 'bg-blue-600/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white' : 'bg-amber-600/20 text-amber-400 group-hover:bg-amber-600 group-hover:text-white'}`}>
                                    <service.icon className="w-8 h-8" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4 transition-colors group-hover:text-blue-400">
                                    {service.title}
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                                    {service.description}
                                </p>

                                <div className="flex items-center text-blue-500 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-3">
                                    Saber más <ArrowUpRight className="ml-1 w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Service Modal / Popup */}
            <AnimatePresence>
                {selectedService && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl glass rounded-[40px] border-white/10 p-8 md:p-12 shadow-2xl overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] -z-10" />

                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white transition-colors glass rounded-full"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="space-y-8">
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-400">
                                        <selectedService.icon className="w-10 h-10" />
                                    </div>
                                    <h2 className="text-3xl font-black text-white">{selectedService.title}</h2>
                                </div>

                                <p className="text-lg text-slate-300 font-medium leading-relaxed">
                                    {selectedService.details.summary}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                    {selectedService.details.points.map((point, i) => (
                                        <div key={i} className="flex items-center space-x-3 text-slate-400 font-bold text-sm bg-white/5 p-4 rounded-2xl border border-white/5">
                                            <point.icon className="w-5 h-5 text-blue-500" />
                                            <span>{point.text}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8">
                                    <button
                                        onClick={() => {
                                            setSelectedService(null);
                                            window.location.href = '#contact';
                                        }}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest py-5 rounded-2xl transition-all hover:scale-[1.02] shadow-[0_10px_30px_-10px_rgba(59,130,246,0.6)]"
                                    >
                                        Hablar con un experto
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
