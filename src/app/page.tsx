import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import StructuredData from '@/components/StructuredData';

export const metadata = {
  title: 'YachayIA Digital | Agencia de IA & Automatización en Salasaca',
  description: 'Expertos en Transformación Digital, IA y Automatización para medianas y pequeñas empresas. Soluciones globales con sabiduría desde Salasaca, Ecuador.',
  keywords: [
    'AI Automation Agency Ecuador',
    'Agencia IA Salasaca',
    'Automatización para PYMES',
    'Custom AI Solutions',
    'YachayIA Digital',
    'Desarrollo Web con IA',
    'Sistemas Financieros IA',
    'Inteligencia Artificial Tungurahua'
  ],
  alternates: {
    canonical: 'https://yachayia.digital',
  },
  openGraph: {
    title: 'YachayIA Digital | Transformación Digital con Sabiduría',
    description: 'Impulsamos el crecimiento de tu empresa con tecnología de vanguardia y raíces culturales.',
    url: 'https://yachayia.digital',
    siteName: 'YachayIA Digital',
    locale: 'es_EC',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-blue-500/30 selection:text-blue-200">
      <StructuredData />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Footer />
      <Chatbot />
    </main>
  );
}
