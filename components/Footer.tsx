
import React from 'react';

const Footer: React.FC = () => {
  const developerWhatsApp = '41988710303';
  const developerMessage = encodeURIComponent('Olá! Gostaria de saber mais sobre como ter um link personalizado para o meu negócio.');

  return (
    <footer className="w-full text-center text-stone-400 text-xs mt-12 pb-8 px-4">
      <p className="mb-2">
        Quer um site como este para você?{' '}
        <a href={`https://wa.me/${developerWhatsApp}?text=${developerMessage}`} target="_blank" rel="noopener noreferrer" className="font-semibold text-stone-300 hover:text-amber-300 underline underline-offset-2 transition-colors">
          Fale conosco!
        </a>
      </p>
      <p>
        Desenvolvido por{' '}
        <a href="https://www.instagram.com/inteligenciarte.ia" target="_blank" rel="noopener noreferrer" className="font-semibold text-stone-300 hover:text-amber-300 transition-colors">
          @inteligenciarte.ia
        </a>
      </p>
    </footer>
  );
};

export default Footer;