'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, ChevronDown } from 'lucide-react';

type Message = {
    role: 'bot' | 'user';
    content: string;
};

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'bot', content: 'Welcome to YachayIA Digital. Alli shamushca. ¿En qué podemos ayudarte hoy?' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async (text: string = input) => {
        if (!text.trim()) return;

        const userMessage: Message = { role: 'user', content: text };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        // Simulate API call to OpenAI
        setTimeout(() => {
            const responses: Record<string, string> = {
                'default': 'Excelente consulta. En YachayIA Digital nos especializamos en esa área. ¿Te gustaría agendar una llamada con un experto?',
                'Web & SEO': 'Nuestras soluciones Web & SEO utilizan IA para analizar tendencias en tiempo real y posicionar tu marca globalmente.',
                'Automatización': 'Automatizamos desde procesos simples en Google Sheets hasta flujos complejos en CRMs como HubSpot o Zoho.',
                'IA para Finanzas': 'Desarrollamos sistemas con OAuth2 y cifrado de grado financiero para análisis predictivo de mercados.'
            };

            const botResponse: Message = {
                role: 'bot',
                content: responses[text] || responses['default']
            };

            setMessages((prev) => [...prev, botResponse]);
            setIsTyping(false);
        }, 1500);
    };

    const menuOptions = ['Web & SEO', 'Automatización', 'IA para Finanzas', 'Contacto'];

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="mb-4 w-[350px] sm:w-[400px] h-[500px] glass rounded-3xl overflow-hidden flex flex-col shadow-2xl border-white/20"
                    >
                        {/* Header */}
                        <div className="bg-blue-600 p-6 flex items-center justify-between">
                            <div className="flex items-center space-x-3 text-white">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                                    <Bot className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold">Yachay Assistant</h3>
                                    <div className="flex items-center space-x-1.5">
                                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                        <p className="text-[10px] font-medium uppercase tracking-widest opacity-80">En línea</p>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/60 hover:text-white p-1 hover:bg-white/10 rounded-lg"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-900/40"
                        >
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-4 rounded-2xl text-sm font-medium ${m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'glass text-slate-200 rounded-tl-none'}`}>
                                        {m.content}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="glass p-4 rounded-2xl rounded-tl-none flex space-x-1">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" />
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Menu Options & Input */}
                        <div className="p-4 bg-slate-900/80 border-t border-white/10">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {menuOptions.map((opt) => (
                                    <button
                                        key={opt}
                                        onClick={() => handleSend(opt)}
                                        className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 glass rounded-full text-blue-400 hover:text-white hover:bg-blue-600/20 transition-all"
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Escribe tu mensaje..."
                                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-all font-medium"
                                />
                                <button
                                    onClick={() => handleSend()}
                                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl transition-all active:scale-95"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_0_30px_-5px_rgba(59,130,246,0.6)] cursor-pointer group"
            >
                <div className="relative">
                    <MessageSquare className={`w-8 h-8 transition-all duration-300 ${isOpen ? 'opacity-0 scale-50 rotate-90' : 'opacity-100 scale-100'}`} />
                    <X className={`w-8 h-8 absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-90'}`} />
                </div>
                {!isOpen && (
                    <div className="absolute -top-12 right-0 glass px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        ¡Hola! ¿Cómo podemos ayudarte?
                    </div>
                )}
            </motion.button>
        </div>
    );
}
