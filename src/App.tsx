import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronRight, Download, Share2, 
  Instagram, Facebook, MessageCircle, Linkedin,
  Heart, Shield, ShieldCheck, BookOpen, Building2, 
  Users, Briefcase, CheckCircle2, ArrowRight,
  Scale, Cpu, Sun, Stethoscope, TrendingDown, 
  GraduationCap, Zap, Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Consumidor', href: '#consumidor' },
    { name: 'Segurança', href: '#seguranca' },
    { name: 'Cariacica', href: '#cariacica' },
    { name: 'Propostas', href: '#propostas' },
    { name: 'Transparência', href: '#transparencia' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2.5 group cursor-pointer">
          <div className="w-10 h-10 bg-linear-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
            G
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-headline font-extrabold text-xl tracking-tighter transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}>Gilsinho</span>
            <span className="font-signature text-accent text-lg -mt-1">Lopes</span>
          </div>
          <div className="bg-accent text-white px-2 py-0.5 rounded-lg font-black text-sm rotate-2 shadow-lg ml-1">
            2200
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-bold transition-all relative group ${isScrolled ? 'text-primary/80 hover:text-accent' : 'text-white/90 hover:text-white'}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </a>
          ))}
          <div className="flex items-center gap-4">
            <button className={`font-bold text-sm transition-colors ${isScrolled ? 'text-primary hover:text-accent' : 'text-white hover:text-accent'}`}>
              Login
            </button>
            <button className={`px-7 py-3 rounded-full text-sm font-black transition-all shadow-xl hover:-translate-y-0.5 active:translate-y-0 ${isScrolled ? 'bg-primary text-white hover:bg-primary/90 hover:shadow-primary/20' : 'bg-white text-primary hover:bg-white/90 hover:shadow-white/20'}`}>
              Quero apoiar
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className={`md:hidden p-2 rounded-full transition-colors ${isScrolled ? 'text-primary hover:bg-primary/5' : 'text-white hover:bg-white/10'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-xl font-black text-primary hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-gray-100" />
              <button className="bg-primary text-white py-4 rounded-2xl font-black text-lg shadow-xl">
                Quero apoiar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-12 pb-16 md:pt-20 md:pb-28 overflow-hidden bg-primary text-white border-t-4 border-linear-to-r from-[#00AEEF] via-white to-[#E889A6]">
      {/* Background Illustration / Texture */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none z-0">
        <svg viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <path d="M0 200 C 300 100 600 300 1200 200 V 800 H 0 Z" fill="currentColor" className="text-white" />
          <path d="M0 400 C 400 300 800 500 1200 400 V 800 H 0 Z" fill="currentColor" className="text-white" opacity="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-black text-white mb-6 leading-[1.1] tracking-tight uppercase">
              PREPARADO. <br />
              DO NOSSO LADO.
            </h1>

            <div className="flex flex-wrap gap-3">
              <button className="bg-accent text-white px-7 py-3 rounded-full font-black text-sm uppercase tracking-wider hover:bg-accent/90 transition-all shadow-2xl hover:shadow-accent/30 flex items-center gap-3">
                Quero apoiar
              </button>
              <button className="bg-transparent border-2 border-white/20 text-white px-7 py-3 rounded-full font-black text-sm uppercase tracking-wider hover:bg-white/10 transition-all flex items-center gap-3 group">
                Baixar material <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2.5">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-primary overflow-hidden shadow-sm">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="Apoiador" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <p className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em]">
                <span className="text-accent">+15.000</span> apoiadores
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-lg">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-[12px] border-white/10 transform hover:scale-[1.02] transition-transform duration-700">
                <img 
                  src="https://www.seculodiario.com.br/wp-content/uploads/2022/05/delegado_gilsinholopes_tatibeling_ales.jpg" 
                  alt="Gilsinho Lopes" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent pointer-events-none" />
              </div>
              
              {/* Floating Badge 1 */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Candidato</p>
                  <p className="font-headline font-black text-primary text-sm leading-none uppercase">Ficha Limpa</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Zap size={24} fill="currentColor" />
                </div>
                <div>
                  <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Prioridade</p>
                  <p className="font-headline font-black text-primary text-sm leading-none uppercase">Segurança Total</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave Dividers - Espírito Santo Flag Colors Style */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg className="relative block w-full h-[80px] md:h-[150px]" viewBox="0 0 1200 180" preserveAspectRatio="none">
          {/* Blue (Top Stripe) */}
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-1.42,1200,0V120H0Z" 
            fill="#00AEEF"
          />
          {/* White (Middle Stripe) */}
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-1.42,1200,0V120H0Z" 
            fill="#ffffff" 
            transform="translate(0, 25)"
          />
          {/* Pink (Bottom Stripe) */}
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-1.42,1200,0V120H0Z" 
            fill="#E889A6" 
            transform="translate(0, 50)"
          />
        </svg>
      </div>
    </section>
  );
};

const WhatsAppBar = () => {
  return (
    <div className="bg-linear-to-r from-primary to-primary-light py-4">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-4 text-white">
        <div className="flex items-center gap-2 font-bold text-lg">
          <MessageCircle size={24} className="fill-white text-primary" />
          <span>Receba notícias no seu WhatsApp</span>
        </div>
        <button className="bg-white text-primary px-6 py-2 rounded-full font-bold text-sm hover:bg-opacity-90 transition-all shadow-md">
          Entrar no grupo
        </button>
      </div>
    </div>
  );
};

const Infographic = () => {
  const legacyItems = [
    {
      title: "Delegado e Legislador",
      desc: "Une a experiência de campo na Polícia Civil com a produtividade técnica no Parlamento Capixaba.",
      icon: <Shield className="text-primary" size={24} />,
      delay: 0.1
    },
    {
      title: "Guardião do Consumidor",
      desc: "Liderança na ALES com leis que combatem abusos em bancos, postos de combustíveis e serviços públicos.",
      icon: <Scale className="text-primary" size={24} />,
      delay: 0.2
    },
    {
      title: "Voz de Cariacica",
      desc: "Atuação municipalista com emendas para saúde, educação e infraestrutura nos bairros de sua base principal.",
      icon: <Building2 className="text-primary" size={24} />,
      delay: 0.3
    }
  ];

  const futureItems = [
    {
      title: "Segurança Pública Inteligente",
      desc: "Implementação de IA no cerco eletrônico e valorização das prerrogativas das forças policiais estaduais.",
      icon: <Cpu className="text-accent" size={24} />,
      delay: 0.4
    },
    {
      title: "ICMS Zero para Energia Solar",
      desc: "Proposta de incentivo fiscal para reduzir em até 90% a conta de luz das famílias.",
      icon: <Sun className="text-accent" size={24} />,
      delay: 0.5
    },
    {
      title: "Saúde 4.0 e Prontuário Único",
      desc: "Digitalização total da rede estadual para agilizar diagnósticos e evitar a duplicidade de exames.",
      icon: <Stethoscope className="text-accent" size={24} />,
      delay: 0.6
    }
  ];

  const impacts = [
    { label: "SEGURANÇA", value: "Redução de 30%", sub: "nos roubos de veículos em 2 anos", icon: <Shield size={20} /> },
    { label: "ECONOMIA", value: "Redução de Custos", sub: "para famílias e produtores rurais", icon: <Zap size={20} /> },
    { label: "EDUCAÇÃO", value: "5.000 Jovens/Ano", sub: "em programação e robótica", icon: <GraduationCap size={20} /> }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-headline font-black text-primary mb-4"
          >
            GILSINHO LOPES 2026: EXPERIÊNCIA E FUTURO
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-3xl mx-auto font-medium"
          >
            Combinando autoridade técnica de Delegado com experiência legislativa para proteger o consumidor e focar em segurança inteligente.
          </motion.p>
        </div>

        <div className="relative grid lg:grid-cols-3 gap-12 items-center">
          {/* Central Shield Logo (Background/Floating) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none flex items-center justify-center">
            <Shield size={600} fill="currentColor" className="text-primary" />
          </div>

          {/* Left Branch: Legacy */}
          <div className="space-y-8 relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-linear-to-r from-transparent to-primary/30" />
              <span className="text-xs font-black text-primary uppercase tracking-widest">Legado e Identidade</span>
            </div>
            {legacyItems.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
                className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all group"
              >
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-headline font-black text-primary mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center: Shield & Path */}
          <div className="hidden lg:flex flex-col items-center justify-center relative">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="w-48 h-48 bg-linear-to-br from-primary to-accent rounded-[2.5rem] flex flex-col items-center justify-center text-white shadow-2xl relative z-20"
            >
              <Shield size={64} fill="white" className="mb-2" />
              <span className="font-headline font-black text-2xl tracking-tighter">GILSINHO</span>
              <span className="font-signature text-2xl -mt-1">Lopes</span>
            </motion.div>
            
            {/* Animated Connection Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
              <motion.path 
                d="M100 100 Q 200 200 300 100" 
                stroke="url(#grad1)" 
                strokeWidth="2" 
                fill="none" 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
              />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1E2E8A" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#E889A6" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Right Branch: Future */}
          <div className="space-y-8 relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-black text-accent uppercase tracking-widest">Propostas 2027-2030</span>
              <div className="h-px flex-1 bg-linear-to-r from-accent/30 to-transparent" />
            </div>
            {futureItems.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
                className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all group"
              >
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-accent/5 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-headline font-black text-accent mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Impact Section */}
        <div className="mt-20 pt-12 border-t border-gray-100">
          <div className="grid md:grid-cols-3 gap-8">
            {impacts.map((impact, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + (idx * 0.1) }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-primary">
                  {impact.icon}
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{impact.label}</p>
                  <h5 className="text-xl font-headline font-black text-primary leading-none mb-1">{impact.value}</h5>
                  <p className="text-xs text-slate-500 font-medium">{impact.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const HealthSection = () => {
  const features = [
    {
      title: "Integração de toda a rede",
      desc: "O prontuário unifica o histórico dos pacientes conectando toda a rede de saúde estadual e conveniada.",
      icon: <Activity className="text-accent" size={28} />
    },
    {
      title: "Acesso universal aos exames",
      desc: "Um médico na UPA de Cariacica terá acesso imediato aos exames feitos em um hospital de Vitória.",
      icon: <CheckCircle2 className="text-accent" size={28} />
    },
    {
      title: "Agilidade e economia",
      desc: "Evita o desperdício de recursos e a repetição de exames, acelerando o diagnóstico final.",
      icon: <TrendingDown className="text-accent" size={28} />
    },
    {
      title: "Expansão da Telemedicina",
      desc: "Consultas com especialistas via vídeo para reduzir drasticamente as filas de espera na saúde pública.",
      icon: <MessageCircle className="text-accent" size={28} />
    }
  ];

  return (
    <section id="saude-detalhe" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              Saúde 4.0
            </div>
            <h2 className="text-5xl md:text-6xl font-headline font-black text-primary mb-8 leading-tight">
              PRONTUÁRIO <br />
              <span className="text-accent">ELETRÔNICO ÚNICO.</span>
            </h2>
            <p className="text-slate-600 text-xl leading-relaxed mb-10">
              Um sistema de informações médicas integrado focado em aumentar a eficiência do atendimento em todo o Espírito Santo.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="group">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    {f.icon}
                  </div>
                  <h4 className="text-lg font-headline font-black text-primary mb-2 group-hover:text-accent transition-colors">
                    {f.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-slate-50">
              <img 
                src="https://picsum.photos/seed/healthtech/1000/1000" 
                alt="Saúde Digital" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating UI Element */}
            <div className="absolute -bottom-10 -left-10 glass-card p-8 rounded-3xl border-white/40 shadow-2xl max-w-xs animate-float">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white">
                  <Activity size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Status do Sistema</p>
                  <p className="text-sm font-black text-primary">Rede 100% Integrada</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-accent" />
                </div>
                <p className="text-[10px] text-slate-400 font-bold">Eficiência de atendimento aumentada em 45%</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const trajectory = [
    { 
      year: "Delegado", 
      title: "A Força nas Ruas", 
      desc: "Carreira sólida na Polícia Civil do ES, enfrentando a criminalidade urbana de frente para proteger as famílias capixabas." 
    },
    { 
      year: "Deputado", 
      title: "Voz no Legislativo", 
      desc: "Atuação marcante na ALES, criando leis firmes, fiscalizando o orçamento e presidindo comissões estratégicas." 
    },
    { 
      year: "Cariacica", 
      title: "O Embaixador", 
      desc: "Principal representante de Cariacica no estado, transformando a realidade da cidade com investimentos e orgulho local." 
    }
  ];

  return (
    <section id="sobre" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              Trajetória de Trabalho
            </div>
            <h2 className="text-5xl md:text-6xl font-headline font-black text-primary mb-8 leading-[1.1]">
              DA EXPERIÊNCIA DAS RUAS <br />
              <span className="text-accent text-4xl md:text-5xl block mt-2">PARA A FORÇA DAS LEIS.</span>
            </h2>
            
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Gilsinho Lopes é formado em Direito e construiu sua história no serviço público. Como Delegado, aprendeu o valor da segurança. Como Deputado, aprendeu o poder da transformação através do legislativo.
            </p>

            <div className="space-y-10 mb-12">
              {trajectory.map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex gap-6 group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center font-black text-xs uppercase tracking-tighter shadow-lg group-hover:bg-accent transition-colors">
                      {item.year}
                    </div>
                    {index !== trajectory.length - 1 && <div className="w-px h-full bg-slate-100 mt-4" />}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-headline font-black text-primary mb-2">{item.title}</h4>
                    <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="bg-accent text-white px-10 py-5 rounded-full font-black text-lg hover:bg-accent/90 transition-all shadow-2xl hover:shadow-accent/30 flex items-center gap-3 group">
              Conheça a história completa <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white relative group">
                <img 
                  src="https://www.seculodiario.com.br/wp-content/uploads/2022/05/delegado_gilsinholopes_tatibeling_ales.jpg" 
                  alt="Gilsinho em ação" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="glass-card p-8 rounded-3xl border-white/40">
                    <p className="font-signature text-3xl text-white mb-2">"Minha vida é servir ao povo capixaba."</p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-px bg-accent" />
                      <p className="text-xs font-black text-white uppercase tracking-[0.2em]">Gilsinho Lopes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/5 rounded-full -z-20 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ConsumerProtection = () => {
  const laws = [
    { title: "Lei de Filas de Banco", desc: "Regulamentação que visa a redução do tempo de espera e a melhoria do conforto para os clientes nas agências bancárias." },
    { title: "Transparência em Contas", desc: "Projetos que obrigam a clareza nas faturas de água e luz, facilitando a identificação de cobranças indevidas e taxas abusivas pelo cidadão." },
    { title: "Fiscalização de Postos", desc: "Medidas que garantem a qualidade do combustível, a precisão das bombas e protegem o consumidor de cobranças abusivas em estacionamentos." },
    { title: "Blitzen do Consumidor", desc: "Ações fiscalizatórias rigorosas em campo, como verificações em supermercados, para coibir a venda de produtos fora da validade e divergências de preços." }
  ];

  return (
    <section id="consumidor" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-accent font-black tracking-[0.3em] text-sm uppercase mb-6 block">Ações e Leis</span>
          <h2 className="text-5xl md:text-6xl font-headline font-black text-primary mb-8">
            O GUARDIÃO DO <span className="text-gradient">CONSUMIDOR.</span>
          </h2>
          <p className="text-slate-600 text-xl leading-relaxed">
            Gilsinho Lopes atua como uma barreira contra abusos de grandes corporações, bancos e concessionárias. Sua marca é a fiscalização em tempo real.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {laws.map((law, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex gap-6 items-start"
            >
              <div className="w-12 h-12 bg-accent/5 rounded-2xl flex items-center justify-center text-accent shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h4 className="text-xl font-headline font-black text-primary mb-2">{law.title}</h4>
                <p className="text-slate-500">{law.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SecurityPublic = () => {
  return (
    <section id="seguranca" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              Plano Estadual de Segurança Inteligente
            </div>
            <h2 className="text-5xl md:text-6xl font-headline font-black text-primary mb-8 leading-[1.1]">
              SEGURANÇA PÚBLICA <br />
              <span className="text-accent">TÉCNICA E REAL.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Gilsinho não fala de segurança a partir de teorias, mas do que vivenciou como delegado. Sua visão prioriza a estruturação das leis e o uso intensivo de tecnologia.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Users size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-headline font-black text-primary mb-2">Valorização das Forças</h4>
                  <p className="text-slate-500">Compromisso com a reestruturação das carreiras e amparo jurídico para policiais civis, militares, penais e bombeiros.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Shield size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-headline font-black text-primary mb-2">Cerco Eletrônico & Proteção Digital</h4>
                  <p className="text-slate-500">Expansão do monitoramento com IA e criação da Delegacia Especializada em Crimes Digitais para combater golpes virtuais.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
              <img 
                src="https://picsum.photos/seed/security/1000/1000" 
                alt="Segurança Pública" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

const CariacicaCommitment = () => {
  const items = [
    { title: "Distritos Industriais", desc: "Criação de polos logísticos e industriais para atrair empresas e gerar emprego e renda para a população local." },
    { title: "Infraestrutura e Saúde", desc: "Emendas para pavimentação, reformas de escolas e fortalecimento do Hospital Estadual e UPAs." },
    { title: "Cultura e Identidade", desc: "Apoio ao Carnaval de Congo de Roda d'Água e valorização do potencial logístico cortado por rodovias e ferrovias." }
  ];

  return (
    <section id="cariacica" className="py-32 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-accent-light font-black tracking-[0.3em] text-sm uppercase mb-6 block">Nossa Base</span>
          <h2 className="text-5xl md:text-6xl font-headline font-black mb-8">
            O COMPROMISSO COM <span className="text-accent-light">CARIACICA.</span>
          </h2>
          <p className="text-white/70 text-xl leading-relaxed">
            Cariacica é o reduto eleitoral, a casa e a base da identidade política de Gilsinho Lopes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10"
            >
              <h4 className="text-2xl font-headline font-black mb-4 text-accent-light">{item.title}</h4>
              <p className="text-white/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TransparencyParticipation = () => {
  const features = [
    { title: "Central de Transparência", desc: "Acompanhe em tempo real as presenças, votos e o destino exato das emendas parlamentares.", icon: <CheckCircle2 /> },
    { title: "Fato ou Fake", desc: "Espaço exclusivo para desmentir boatos com certidões e documentos reais.", icon: <Shield /> },
    { title: "Sugira uma Lei", desc: "Envie sua ideia e nossa equipe jurídica avaliará a transformação em um projeto real.", icon: <BookOpen /> },
    { title: "Militância Digital", desc: "Cadastre-se como voluntário e faça parte da equipe que vai transformar o ES.", icon: <Users /> }
  ];

  return (
    <section id="transparencia" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent font-black tracking-[0.3em] text-sm uppercase mb-6 block">Área Interativa</span>
          <h2 className="text-5xl md:text-6xl font-headline font-black text-primary mb-8 leading-tight">
            TRANSPARÊNCIA E <span className="text-accent">PARTICIPAÇÃO.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:bg-accent transition-colors">
                {item.icon}
              </div>
              <h4 className="text-xl font-headline font-black text-primary mb-4">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Proposals = () => {
  const proposals = [
    {
      title: "Saúde",
      desc: "Mais atendimento, menos espera. Ampliação do acesso à saúde básica, redução das filas para exames e fortalecimento dos hospitais regionais.",
      icon: <Stethoscope className="text-primary" size={32} />,
      color: "from-primary/20 to-primary/5",
      tag: "Saúde digna é direito"
    },
    {
      title: "Educação",
      desc: "Educação que transforma vidas. Investimento em escolas públicas, valorização dos professores e foco em ensino técnico e profissionalizante.",
      icon: <GraduationCap className="text-accent" size={32} />,
      color: "from-accent/20 to-accent/5",
      tag: "O futuro começa aqui"
    },
    {
      title: "Infraestrutura",
      desc: "Obras que chegam na ponta. Melhoria de estradas e acessos, investimentos em mobilidade urbana e infraestrutura para bairros e comunidades.",
      icon: <Building2 className="text-primary-light" size={32} />,
      color: "from-primary-light/20 to-primary-light/5",
      tag: "Desenvolvimento real"
    },
    {
      title: "Segurança",
      desc: "Mais proteção para as famílias. Reforço no policiamento, integração das forças de segurança e tecnologia no combate ao crime.",
      icon: <Shield className="text-primary" size={32} />,
      color: "from-primary/20 to-primary/5",
      tag: "Segurança é prioridade"
    },
    {
      title: "Emprego e Renda",
      desc: "Oportunidade para crescer. Incentivo ao empreendedorismo, apoio ao pequeno e médio negócio e geração de empregos locais.",
      icon: <Briefcase className="text-accent" size={32} />,
      color: "from-accent/20 to-accent/5",
      tag: "Trabalho gera dignidade"
    },
    {
      title: "Social",
      desc: "Cuidar das pessoas é essencial. Apoio às famílias em vulnerabilidade, programas sociais eficientes, inclusão e acessibilidade.",
      icon: <Users className="text-primary-light" size={32} />,
      color: "from-primary-light/20 to-primary-light/5",
      tag: "Ninguém fica para trás"
    }
  ];

  return (
    <section id="propostas" className="py-32 bg-slate-50 relative wave-bg">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block bg-primary/5 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            Plano de Trabalho 2027-2030
          </div>
          <h2 className="text-4xl md:text-6xl font-headline font-black text-primary mb-8 leading-tight">
            Compromisso com quem mais precisa. <br />
            <span className="text-gradient">Trabalho de verdade</span> para o Espírito Santo.
          </h2>
          <p className="text-slate-600 text-xl leading-relaxed">
            Projetos pensados para melhorar a vida das pessoas, fortalecer as cidades e gerar oportunidades reais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {proposals.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-10px_rgba(30,46,138,0.15)] transition-all duration-500 group relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-[5rem] -mr-10 -mt-10`} />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:shadow-lg transition-all duration-500">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest border border-slate-100 px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
                
                <h3 className="text-2xl font-headline font-black text-primary mb-4 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-8">
                  {item.desc}
                </p>
                
                <a 
                  href="#" 
                  className="flex items-center text-primary font-black text-sm gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500"
                >
                  Ver detalhes do plano <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NumberSection = () => {
  return (
    <section className="py-32 bg-primary text-white overflow-hidden relative">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary-light/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-accent font-black tracking-[0.3em] text-sm uppercase mb-6 block">👉 GUARDE ESSE NÚMERO</span>
            <h2 className="text-4xl md:text-6xl font-headline font-black mb-12 uppercase tracking-tighter leading-none">
              NAS URNAS, DIGITE:
            </h2>
            
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-white blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative bg-white text-primary px-16 py-10 rounded-[4rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] transform group-hover:scale-105 transition-transform duration-500">
                <span className="text-9xl md:text-[12rem] font-headline font-black tracking-tighter italic leading-none block">2200</span>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-[#25D366] text-white px-10 py-5 rounded-full font-black text-xl hover:bg-opacity-90 transition-all shadow-2xl hover:shadow-green-500/30 flex items-center gap-3 group">
              <MessageCircle size={28} className="fill-white" />
              Junte-se a essa caminhada
            </button>
            <div className="flex gap-4">
              <button className="bg-white/10 hover:bg-white/20 text-white p-5 rounded-full transition-all backdrop-blur-md border border-white/10 group" title="Compartilhar">
                <Share2 size={28} className="group-hover:scale-110 transition-transform" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white p-5 rounded-full transition-all backdrop-blur-md border border-white/10 group" title="Apoiar">
                <Heart size={28} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
          
          <p className="mt-12 text-white/60 font-bold text-sm uppercase tracking-widest">
            Gilsinho Lopes — preparado para trabalhar por você.
          </p>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    { url: "https://picsum.photos/seed/camp1/800/800", size: "col-span-1 row-span-1" },
    { url: "https://picsum.photos/seed/camp2/800/1000", size: "md:col-span-2 md:row-span-2" },
    { url: "https://picsum.photos/seed/camp3/800/800", size: "col-span-1 row-span-1" },
    { url: "https://picsum.photos/seed/camp4/1000/800", size: "md:col-span-1 md:row-span-2" },
    { url: "https://picsum.photos/seed/camp5/800/800", size: "col-span-1 row-span-1" },
    { url: "https://picsum.photos/seed/camp6/800/800", size: "col-span-1 row-span-1" },
  ];

  return (
    <section id="galeria" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent font-black tracking-[0.3em] text-sm uppercase mb-6 block">Momentos da Campanha</span>
          <h2 className="text-5xl md:text-6xl font-headline font-black text-primary mb-8 leading-tight">
            NOSSA <span className="text-accent">CAMINHADA</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${img.size} rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group relative`}
            >
              <img 
                src={img.url} 
                alt="Galeria" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="text-white">
                  <p className="font-black text-lg">Evento em Vila Velha</p>
                  <p className="text-sm text-white/80">Março 2026</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Materials = () => {
  const items = [
    { title: "Santinho Digital", type: "PDF / Imagem", icon: <Download size={24} /> },
    { title: "Figurinhas WhatsApp", type: "Pack Stickers", icon: <MessageCircle size={24} /> },
    { title: "Plano de Governo", type: "Documento Completo", icon: <BookOpen size={24} /> },
    { title: "Filtros Instagram", type: "Link Social", icon: <Instagram size={24} /> }
  ];

  return (
    <section id="materiais" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-black tracking-[0.3em] text-sm uppercase mb-6 block">Kit Digital</span>
              <h2 className="text-5xl md:text-6xl font-headline font-black text-primary mb-8 leading-tight">
                BAIXE NOSSOS <span className="text-accent">MATERIAIS.</span>
              </h2>
              <p className="text-slate-600 text-xl leading-relaxed mb-10">
                Leve a nossa mensagem para mais pessoas. Baixe o kit completo e ajude a transformar nossa cidade.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-white px-10 py-5 rounded-full font-black text-xl shadow-2xl hover:shadow-primary/30 transition-all flex items-center gap-3">
                  <Download size={24} /> Baixar Kit Completo
                </button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {items.map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start group"
                >
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-headline font-black text-primary mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">{item.type}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-32 pb-12 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] [background-size:60px_60px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary font-black text-2xl shadow-xl">
                G
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-headline font-extrabold text-white text-2xl tracking-tighter uppercase">Gilsinho</span>
                <span className="font-signature text-accent-light text-xl -mt-1.5">Lopes</span>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed mb-8 font-medium">
              Um compromisso com o futuro de nossa cidade. Trabalho, ética e transparência para todos os cidadãos.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-white/5 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-accent group"
                >
                  <Icon size={22} className="group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-headline font-black text-lg mb-8 uppercase tracking-widest text-accent-light">Navegação</h4>
            <ul className="space-y-4">
              {['Início', 'Sobre', 'Consumidor', 'Segurança', 'Cariacica', 'Propostas', 'Transparência'].map((item, i) => (
                <li key={i}>
                  <motion.a 
                    href={`#${item.toLowerCase()}`} 
                    whileHover={{ x: 8 }}
                    className="text-white/60 hover:text-white transition-colors font-bold flex items-center gap-2 group"
                  >
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform text-accent-light" /> {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-black text-lg mb-8 uppercase tracking-widest text-accent-light">Contato</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-accent-light shrink-0">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-xs font-black text-white/40 uppercase tracking-widest mb-1">WhatsApp</p>
                  <p className="font-bold">(27) 99999-9999</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-accent-light shrink-0">
                  <Facebook size={20} />
                </div>
                <div>
                  <p className="text-xs font-black text-white/40 uppercase tracking-widest mb-1">Email</p>
                  <p className="font-bold">contato@gilsinholopes.com.br</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-black text-lg mb-8 uppercase tracking-widest text-accent-light">Militância Digital</h4>
            <p className="text-white/60 text-sm mb-6 font-medium">Cadastre-se como voluntário e faça parte da equipe que vai transformar o Espírito Santo.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-accent transition-colors font-bold"
              />
              <button className="bg-accent text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-accent/90 transition-all shadow-xl">
                Seja um Voluntário
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em] text-center md:text-left">
            <p>© 2026 Gilsinho Lopes 2200. Todos os direitos reservados.</p>
            <p className="mt-1">CNPJ: 00.000.000/0001-00 | Coligação: "Preparado para Você"</p>
          </div>
          <div className="flex gap-8 text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Transparência</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FlagSeparator = () => {
  return (
    <div className="py-12 md:py-16 bg-transparent overflow-hidden">
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full flex flex-col shadow-2xl origin-left"
      >
        <div className="w-full h-2 md:h-3 bg-[#00AEEF]" />
        <div className="w-full h-2 md:h-3 bg-white flex items-center justify-center">
          <div className="h-px w-1/4 bg-slate-100 hidden md:block" />
          <span className="mx-4 text-[8px] font-black text-slate-400 uppercase tracking-[0.5em] whitespace-nowrap">Trabalha e Confia</span>
          <div className="h-px w-1/4 bg-slate-100 hidden md:block" />
        </div>
        <div className="w-full h-2 md:h-3 bg-[#E889A6]" />
      </motion.div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary/20">
      <Navbar />
      <Hero />
      <FlagSeparator />
      <Infographic />
      <FlagSeparator />
      <WhatsAppBar />
      <FlagSeparator />
      <About />
      <FlagSeparator />
      <ConsumerProtection />
      <FlagSeparator />
      <SecurityPublic />
      <FlagSeparator />
      <CariacicaCommitment />
      <FlagSeparator />
      <Proposals />
      <FlagSeparator />
      <HealthSection />
      <FlagSeparator />
      <TransparencyParticipation />
      <FlagSeparator />
      <NumberSection />
      <FlagSeparator />
      <Gallery />
      <FlagSeparator />
      <Materials />
      <FlagSeparator />
      <Footer />
      
      {/* Floating Action Button (Mobile Only) */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <button className="bg-accent text-white p-4 rounded-full shadow-2xl flex items-center justify-center animate-bounce">
          <Heart size={24} fill="currentColor" />
        </button>
      </div>
    </div>
  );
}
