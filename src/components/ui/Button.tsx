import type { LinkProps } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';
import type { HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props
  extends
    Omit<HTMLAttributes<HTMLAnchorElement>, 'slot' | 'children'>,
    LinkProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'info' | 'link';
  size?: 'sm' | 'default' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  text?: string;
  icon?: ReactNode;
  target?: string;
  onClick?: () => void;
  className?: string;
}

function Button({
  children,
  variant = 'primary',
  size = 'default',
  type,
  to,
  target,
  onClick,
  className = '',
  disabled = false,
  ...props
}: React.PropsWithChildren<Props>) {
  const variants = {
    primary: 'bg-primary hover:bg-primary/90',
    secondary: 'bg-secondary hover:bg-secondary/90',
    accent: 'bg-accent hover:bg-accent/90',
    info: 'bg-info hover:bg-info/90',
    link: 'bg-transparent hover:bg-transparent',
  };

  const sizes = {
    sm: 'btn-sm',
    default: '',
    lg: 'btn-lg',
  };
  const classList = [
    'btn cursor-pointer relative disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none',
    twMerge(variants[variant] || '', sizes[size] || '', className),
  ];
  if (type === 'submit' || type === 'reset' || type === 'button') {
    return (
      <button
        onClick={onClick}
        type={type}
        className={classList.join(' ')}
        disabled={disabled}
      >
        {props.text || children}
        {props.icon && <div className="block ml-2">{props.icon}</div>}
      </button>
    );
  }
  const anchorClassList = [
    'btn cursor-pointer',
    twMerge(variants[variant] || '', sizes[size] || '', className),
  ];
  return (
    <Link
      className={anchorClassList.join(' ')}
      to={to}
      activeProps={{ className: 'text-secondary dark:text-white' }}
      {...(target ? { target: target, rel: 'noopener noreferrer' } : {})}
      {...props}
    >
      {props.text || children}
      {props.icon && <div className="block ml-2">{props.icon}</div>}
    </Link>
  );
}

export default Button;
