import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  children: React.ReactNode;
  as?: 'button' | 'a';
  href?: string;
  download?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  children, 
  as = 'button',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-black focus:ring-primary",
    secondary: "bg-white text-primary hover:bg-gray-50 border border-gray-200 focus:ring-gray-200",
    outline: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
    ghost: "bg-transparent text-primary hover:bg-gray-100 focus:ring-gray-200"
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const combinedClassName = `${baseStyles} ${variants[variant]} ${widthStyle} ${className}`;

  if (as === 'a') {
    return (
      <a className={combinedClassName} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
