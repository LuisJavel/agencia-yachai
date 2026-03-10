import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Projects from '@/components/Projects';

import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export const metadata = {
  title: 'YachayIA Digital | AI Automation & Custom Solutions',
  description: 'Global AI & Automation Agency. Expert in Custom AI Solutions, Web Development with AI, and Fintech Systems. Alli shamushca to the future.',
  keywords: ['AI Automation Agency', 'Custom AI Solutions', 'Web Development with AI', 'YachayIA Digital', 'Fintech AI', 'Chatbots GPT-4'],
  openGraph: {
    title: 'YachayIA Digital | AI Beyond Boundaries',
    description: 'Empowering businesses with intelligent automation and ancestral wisdom.',
    url: 'https://yachayia.digital',
    siteName: 'YachayIA Digital',
    locale: 'es_EC',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-blue-500/30 selection:text-blue-200">
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
