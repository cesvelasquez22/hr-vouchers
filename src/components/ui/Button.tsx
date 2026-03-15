import { Link } from '@tanstack/react-router';
import { twMerge } from 'tailwind-merge';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'info';
  size?: 'sm' | 'default' | 'lg';
  type?: 'button' | 'submit' | 'reset' | 'link';
  text?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  to?: string;
  className?: string;
}

function Button({
  children,
  variant = 'primary',
  size = 'default',
  type = 'button',
  to,
  target,
  className = '',
  ...props
}: React.PropsWithChildren<Props>) {
  const variants = {
    primary: 'bg-primary hover:bg-primary/90',
    secondary: 'bg-secondary hover:bg-secondary/90',
    accent: 'bg-accent hover:bg-accent/90',
    info: 'bg-info hover:bg-info/90',
  };

  const sizes = {
    sm: 'btn-sm',
    default: '',
    lg: 'btn-lg',
  };
  const classList = [
    'btn cursor-pointer relative',
    twMerge(variants[variant] || '', sizes[size] || '', className),
  ];
  if (type === 'submit' || type === 'reset' || type === 'button') {
    return (
      <button type={type} className={classList.join(' ')}>
        {props.text || children}
        {props.icon && <div className="block ml-2">{props.icon}</div>}
      </button>
    );
  }
  const anchorClassList = [
    'btn cursor-pointer bg-transparent hover:bg-transparent text-link hover:text-link/80',
    twMerge(variants[variant] || '', sizes[size] || '', className),
  ];
  return (
    <Link
      className={anchorClassList.join(' ')}
      to={to}
      {...(target ? { target: target, rel: 'noopener noreferrer' } : {})}
      {...props}
    >
      {props.text || children}
      {props.icon && <div className="block ml-2">{props.icon}</div>}
    </Link>
  );
}

export default Button;
