import { ThemeProvider } from "styled-components";
import Header from "./components/header";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Header />
    </ThemeProvider>
  );
}

export default App;
