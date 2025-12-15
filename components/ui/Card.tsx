import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', noPadding = false }) => {
  return (
    <div className={`bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100/50 transition-all duration-300 hover:shadow-md ${noPadding ? '' : 'p-6 md:p-8'} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
