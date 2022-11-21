import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import Header from "./components/header";
import Router from "./router";
import store from "./store";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <ToastContainer
          position="top-right"
          autoClose={8000}
          hideProgressBar={false}
          newestOnTop={false}
          draggable={false}
          closeOnClick
          pauseOnHover
          theme="dark"
        />

        <Header />

        <Router />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
