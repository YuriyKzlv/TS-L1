import { createContext } from 'react';
import { ThemeContextType } from '../utils/types';

export const ThemeContext = createContext<ThemeContextType>(['light', () => null]);
export const ThemeProvider = ThemeContext.Provider;
