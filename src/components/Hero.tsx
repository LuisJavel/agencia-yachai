'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Globe, Shield } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 hero-gradient overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 top-0 h-full w-full pointer-events-none neural-bg opacity-30 select-none -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                >
                    <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 glass px-6 py-2 rounded-full border border-blue-500/30 group cursor-default">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-sm font-semibold tracking-wide uppercase text-blue-400">
                            Agencia de IA y Automatización Global
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-8xl font-black tracking-tighter text-white"
                    >
                        Transformación <span className="gradient-text">Digital y</span><br />
                        <span className="text-blue-500">asesoría IA</span>.
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-medium leading-relaxed"
                    >
                        YachayIA Digital: Inteligencia Artificial, Automatización y Soluciones a medida que impulsan el crecimiento de empresas medianas y pequeñas.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
                    >
                        <Link
                            href="#contact"
                            className="group flex items-center bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)]"
                        >
                            Iniciar Transformación
                            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                        </Link>
                        <Link
                            href="#services"
                            className="glass border-white/20 hover:border-white/40 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-300 flex items-center"
                        >
                            Explorar Servicios
                        </Link>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-20 max-w-4xl mx-auto"
                    >
                        {[
                            { icon: Terminal, label: 'Custom Code' },
                            { icon: Shield, label: 'Fintech Sec' },
                            { icon: Globe, label: 'Global Scale' },
                            { icon: Cpu, name: 'AI Expert' }
                        ].map((feature, i) => (
                            <div key={i} className="flex flex-col items-center space-y-3 opacity-60 hover:opacity-100 transition-opacity">
                                {feature.icon && <feature.icon className="w-8 h-8 text-blue-500" />}
                                <p className="text-sm font-semibold text-slate-300 uppercase tracking-widest">{feature.label || feature.name}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] -z-10" />
        </section>
    );
}

import { Cpu } from 'lucide-react';
