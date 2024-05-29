import { createContext } from 'preact';
import { useContext } from 'preact/hooks';
import theme from './theme';

const ThemeContext = createContext(theme);

export const ThemeProvider = ThemeContext.Provider;
export const useTheme = () => useContext(ThemeContext);