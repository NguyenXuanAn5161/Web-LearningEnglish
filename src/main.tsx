import "bootstrap/dist/css/bootstrap.min.css";
import { render } from "preact";
import { App } from "./app.tsx";
import { ThemeProvider } from "./core/ThemeContext.tsx";
import theme from "./core/theme.ts";

const Root = () => (
  <ThemeProvider value={theme}>
    <App />
  </ThemeProvider>
);

render(<Root />, document.getElementById("app")!);
