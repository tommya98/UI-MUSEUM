import { useState } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";

import GlobalStyles from "./styles/GlobalStyles";
import ResetStyles from "./styles/ResetStyles";
import { DARK_THEME, LIGHT_THEME } from "./styles/theme";
import ThemeToggle from "./components/ThemeToggle";
import Layout from "./Layout";
import store from "./stores";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? DARK_THEME : LIGHT_THEME}>
      <Provider store={store}>
        <ResetStyles />
        <GlobalStyles />
        <ThemeToggle
          isDark={isDark}
          onClick={() => setIsDark((prev) => !prev)}
        />
        <Layout />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
