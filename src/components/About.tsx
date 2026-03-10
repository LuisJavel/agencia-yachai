'use client';

import { motion } from 'framer-motion';
import { Sparkles, Languages, Lightbulb, Users } from 'lucide-react';

export default function About() {
    const points = [
        { icon: Lightbulb, title: 'Yachay', desc: 'Conocimiento y sabiduría aplicada a la tecnología.' },
        { icon: Languages, title: 'Bilingüe', desc: 'Soluciones en Inglés, Español y raíz Kichwa.' },
        { icon: Users, title: 'Global', desc: 'Atendiendo clientes desde los Andes para el mundo.' },
        { icon: Sparkles, title: 'IA Ética', desc: 'Automatización que potencia el talento humano.' }
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden bg-slate-900/50">
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 relative"
                    >
                        <div className="w-full aspect-square max-w-md mx-auto relative group">
                            <div className="absolute inset-0 bg-blue-600 rounded-3xl blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity" />
                            <div className="relative glass rounded-3xl overflow-hidden p-12 h-full flex flex-col justify-center items-center text-center space-y-8">
                                <blockquote className="text-3xl md:text-4xl font-black text-white italic leading-tight">
                                    "Alli shamushca."
                                </blockquote>
                                <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">
                                    Welcome to YachayIA Digital
                                </p>
                                <div className="h-px w-24 bg-blue-500/50" />
                                <p className="text-xl text-slate-300 font-medium">
                                    Combinamos el conocimiento ancestral con la potencia de la Inteligencia Artificial.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex-1 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                                Raíces en la <span className="text-amber-500">Sabiduría</span>,<br />
                                Rumbo al <span className="text-blue-500">Futuro</span>.
                            </h2>
                            <p className="text-lg text-slate-400 font-medium leading-relaxed">
                                En YachayIA Digital, el nombre "Yachay" simboliza nuestra esencia: el conocimiento. No solo construimos software; creamos sistemas inteligentes que aprenden, se adaptan y resuelven desafíos complejos para el sector financiero y tecnológico global.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {points.map((point, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="space-y-3"
                                >
                                    <div className="flex items-center space-x-3 text-blue-400">
                                        <point.icon className="w-6 h-6" />
                                        <h4 className="text-lg font-bold text-white">{point.title}</h4>
                                    </div>
                                    <p className="text-sm text-slate-400 font-medium">{point.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
