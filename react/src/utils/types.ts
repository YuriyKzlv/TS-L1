declare global {
  interface Window {
    appSettings: AppSettings;
  }
}

export interface OptionProps {
  id: number,
  [key: string] : string | number
}

export interface ButtonProps {
  children: React.ReactNode,
  variant?: VariantBtn,
  disabled?: boolean,
  outlined?: boolean,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
  type?: 'button' | 'submit'
}

type VariantBtn = 'primary'| 'secondary' | 'warn' | 'error';

export interface AppSettings {
  theme: Theme,
  requestDelay: number,
  requestChanceToSuccess: number,
  [key: string] : string | number
}

export type Theme = 'dark' | 'light';

export type ThemeContextType = [theme: string, setTheme: (theme: Theme) => void];