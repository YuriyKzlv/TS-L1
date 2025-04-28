import { useTheme } from '../hooks';

type VariantBtn = 'primary'| 'secondary' | 'warn' | 'error';

interface ButtonProps {
  children: React.ReactNode,
  variant?: VariantBtn,
  disabled?: boolean,
  outlined?: boolean,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
  type?: 'button' | 'submit'
}

const Button = (props: ButtonProps) => {
  const {
    children,
    variant = 'primary',
    disabled = false,
    outlined = false,
    onClick,
    type = 'button',
  } = props;

  const [theme] = useTheme();

  const buttonStyles =
    theme === 'light'
      ? { background: 'white', color: 'black' }
      : { background: 'black', color: 'white' };

  return (
    <button
      type={type}
      className={`button button--${variant} ${
        outlined ? 'button--outlined' : ''
      }`}
      style={buttonStyles}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
