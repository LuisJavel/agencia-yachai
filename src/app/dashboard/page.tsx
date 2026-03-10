'use client';

import { motion } from 'framer-motion';
import { LayoutDashboard, Users, Zap, Settings, BookOpen, BarChart3, Bell, Search, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
    const stats = [
        { label: 'Leads Generados (IA)', value: '1,284', trend: '+12%', color: 'blue' },
        { label: 'Ahorro Operativo', value: '$12.5k', trend: '+24%', color: 'amber' },
        { label: 'Tiempo de Respuesta', value: '1.2s', trend: '-0.4s', color: 'green' },
        { label: 'Consultas GPT-4', value: '45,200', trend: '+45%', color: 'purple' }
    ];

    const recentAutomations = [
        { name: 'CRM Sync (HubSpot)', status: 'Active', time: '2m ago' },
        { name: 'Financial Predictor v2', status: 'Processing', time: '15m ago' },
        { name: 'Bilingual Chatbot', status: 'Idle', time: '1h ago' },
        { name: 'Email Sequence Alpha', status: 'Paused', time: '5h ago' }
    ];

    return (
        <div className="min-h-screen bg-slate-950 flex text-slate-200">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/5 p-6 flex flex-col space-y-10">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black">Y</div>
                    <span className="text-xl font-bold text-white">Yachay<span className="text-blue-500">IA</span></span>
                </div>

                <nav className="flex-1 space-y-2">
                    {[
                        { icon: LayoutDashboard, label: 'Dashboard', active: true },
                        { icon: BarChart3, label: 'Analítica' },
                        { icon: Zap, label: 'Automatizaciones' },
                        { icon: Users, label: 'Leads' },
                        { icon: Settings, label: 'Configuración' }
                    ].map((item, i) => (
                        <Link
                            key={i}
                            href="#"
                            className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-bold transition-all text-sm ${item.active ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20' : 'text-slate-500 hover:text-white hover:bg-white/5'}`}
                        >
                            <item.icon className="w-5 h-5" />
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </nav>

                <button className="flex items-center space-x-3 text-slate-500 hover:text-red-400 font-bold text-sm px-4 py-3 transition-colors">
                    <LogOut className="w-5 h-5" />
                    <span>Cerrar Sesión</span>
                </button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-10 overflow-y-auto">
                <header className="flex items-center justify-between mb-12">
                    <div>
                        <h1 className="text-3xl font-black text-white">Alli shamushca, <span className="text-blue-500">Luis</span></h1>
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mt-1">Dashboard de YachayIA Digital</p>
                    </div>
                    <div className="flex items-center space-x-6">
                        <div className="relative group">
                            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                            <input type="text" placeholder="Buscar..." className="bg-white/5 border border-white/10 rounded-xl px-12 py-3 text-sm focus:outline-none focus:border-blue-500/30 transition-all w-64" />
                        </div>
                        <button className="w-12 h-12 glass rounded-xl flex items-center justify-center relative hover:bg-white/5 transition-all">
                            <Bell className="w-5 h-5 text-slate-400" />
                            <span className="absolute top-3 right-3 w-2 h-2 bg-blue-500 rounded-full" />
                        </button>
                    </div>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-8 rounded-3xl border-white/5 hover:border-blue-500/20 transition-all duration-300 group cursor-default"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-blue-500 transition-colors">{stat.label}</p>
                                <div className="text-[10px] bg-green-500/20 text-green-500 px-2 py-1 rounded-lg font-bold">
                                    {stat.trend}
                                </div>
                            </div>
                            <h3 className="text-4xl font-black text-white">{stat.value}</h3>
                        </motion.div>
                    ))}
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 glass p-10 rounded-[32px] border-white/5 space-y-8">
                        <h3 className="text-xl font-black text-white">Visualización de Datos (Predicción)</h3>
                        <div className="h-64 w-full bg-blue-600/5 rounded-3xl border border-dashed border-blue-500/20 flex items-center justify-center text-slate-600 font-bold uppercase tracking-widest text-xs italic">
                            Chart Placeholder (Recharts coming soon)
                        </div>
                    </div>

                    <div className="glass p-10 rounded-[32px] border-white/5 space-y-8">
                        <h3 className="text-xl font-black text-white">Actividad Reciente</h3>
                        <div className="space-y-6">
                            {recentAutomations.map((item, i) => (
                                <div key={i} className="flex items-center justify-between group">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center transition-colors group-hover:bg-blue-600/20">
                                            <Zap className={`w-5 h-5 ${item.status === 'Active' ? 'text-blue-500' : 'text-slate-500'}`} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{item.name}</p>
                                            <p className="text-[10px] text-slate-500 font-bold">{item.time}</p>
                                        </div>
                                    </div>
                                    <div className={`text-[10px] px-2 py-1 rounded-lg font-black uppercase tracking-tighter ${item.status === 'Active' ? 'bg-blue-500/20 text-blue-500' : 'bg-slate-500/20 text-slate-500'}`}>
                                        {item.status}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full py-4 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors pt-6 border-t border-white/5">
                            Ver todo el historial
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
