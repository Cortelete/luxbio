
import React, { useState } from 'react';
import LinkButton from './components/LinkButton';
import Modal from './components/Modal';
import Footer from './components/Footer';
import GoldenParticles from './components/GoldenParticles';
import { FormData } from './types';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    isClient: false,
    preferredPeriods: [],
    preferredWeekDays: [],
    wantsSpecificDate: false,
    specificDate: '',
    procedure: [],
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, isClient, preferredPeriods, preferredWeekDays, wantsSpecificDate, specificDate, procedure } = formData;
    if (procedure.length === 0) return;

    const studioPhoneNumber = '42999722042';
    const procedureText = procedure.join(', ');
    const clientStatusText = isClient ? "Já sou cliente." : "Sou um(a) novo(a) cliente.";

    let timeDetails = [];
    if (wantsSpecificDate && specificDate) {
        const [year, month, day] = specificDate.split('-');
        const formattedDate = `${day}/${month}/${year}`;
        timeDetails.push(`Data específica: ${formattedDate}`);
    } else {
        if (preferredPeriods.length > 0) {
            timeDetails.push(`Período(s): ${preferredPeriods.join(', ')}`);
        }
        if (preferredWeekDays.length > 0) {
            timeDetails.push(`Dia(s) da semana: ${preferredWeekDays.join(', ')}`);
        }
    }
    
    const timePreferenceText = timeDetails.length > 0 ? timeDetails.join('\n') : "Nenhuma preferência de horário informada.";

    const message = `Olá! Gostaria de agendar um horário.\n\n` +
                  `Nome: ${name}\n` +
                  `${clientStatusText}\n\n` +
                  `Procedimento(s): ${procedureText}\n\n` +
                  `Preferências de Horário:\n${timePreferenceText}\n\n` +
                  `Aguardo contato, obrigado!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${studioPhoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setIsModalOpen(false);
  };

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-between p-4 sm:p-6 relative overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute inset-0 z-0 flex items-center justify-start pointer-events-none opacity-5" aria-hidden="true">
        <img src="/logo.png?v=2" alt="" className="w-2/3 max-w-xl -translate-x-1/4" />
      </div>

      <GoldenParticles />

      <div className="relative z-10 w-full flex flex-col items-center justify-between flex-grow min-h-screen">
        <main className="w-full flex flex-col items-center justify-center flex-grow">
          <header className="text-center mb-10 mt-8">
            <img src="/logo.png?v=2" alt="Luxury Studio Logo" className="w-24 h-24 mx-auto mb-4" />
            <h1 className="font-cinzel text-4xl sm:text-5xl font-bold text-amber-300 tracking-widest">
            Luxury Studio
            </h1>
            <p className="text-stone-300 text-lg tracking-[0.2em] uppercase mt-2">
            Joyci Almeida
            </p>
          </header>

          <div className="w-full max-w-sm space-y-5 flex flex-col items-center">
            <LinkButton href="https://www.instagram.com/luxury.joycialmeida">
              Luxury no Instagram
            </LinkButton>
            <LinkButton href="http://luxacademy.vercel.app">
              Cursos de Lash
            </LinkButton>
            <LinkButton onClick={() => setIsModalOpen(true)}>
              Agendamentos via WhatsApp
            </LinkButton>
            <LinkButton disabled>
              Nosso Catálogo (em breve)
            </LinkButton>
          </div>
        </main>

        <Footer />
      </div>


      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleWhatsAppSubmit}
      />
    </div>
  );
};

export default App;
