import { ThemeProvider } from "styled-components";
import Header from "./components/header";
import Router from "./router";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Header />

      <Router />
    </ThemeProvider>
  );
}

export default App;
