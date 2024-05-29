import { render } from 'preact';
import { App } from './app.tsx';
import { ThemeProvider } from './core/ThemeContext.tsx';
import theme from './core/theme.ts';
import './index.css';

const Root = () => (
    <ThemeProvider value={theme}>
      <App />
    </ThemeProvider>
  );

render(<Root />, document.getElementById('app')!)
