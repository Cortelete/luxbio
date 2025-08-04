import React from 'react';

interface LinkButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, onClick, children, disabled = false, className = '' }) => {
  const baseClasses =
    'shine-hover w-full max-w-md text-center text-lg font-medium tracking-wider bg-black/30 text-stone-100 rounded-lg px-6 py-4 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-amber-300 border border-amber-300/20';
  const activeClasses = 'hover:bg-white/10 hover:scale-[1.02] active:scale-[0.99]';
  const disabledClasses = 'opacity-50 cursor-not-allowed';

  const combinedClasses = `${baseClasses} ${disabled ? disabledClasses : activeClasses} ${className}`;

  if (href && !disabled) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={combinedClasses}>
      {children}
    </button>
  );
};

export default LinkButton;