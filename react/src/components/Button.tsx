import { useTheme } from '../hooks';
import { ButtonProps } from '../utils/types';


const Button = (props: ButtonProps): JSX.Element => {
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
