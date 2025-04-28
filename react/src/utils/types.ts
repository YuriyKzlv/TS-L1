declare global {
  interface Window {
    appSettings: AppSettings;
  }
}

export interface FirsOptionProps {
  id: number,
  name?: string,
  value?: string,
}

export interface SecondOptionProps {
  id: number,
  label?: string,
  value?: string,
}

export interface AppSettings {
  theme: Theme,
  requestDelay: number,
  requestChanceToSuccess: number,
  [key: string] : string | number
}

export type Theme = 'dark' | 'light';

export type ThemeContextType = [theme: Theme, setTheme: (theme: Theme) => void];