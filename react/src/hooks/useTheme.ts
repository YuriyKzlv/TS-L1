import { useContext } from 'react';

import { ThemeContext } from '../context/theme';
import { ThemeContextType } from '../utils/types';

export const useTheme = () => useContext<ThemeContextType>(ThemeContext);
