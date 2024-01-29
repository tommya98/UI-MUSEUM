import { useState } from "react";
import { ThemeProvider } from "@emotion/react";

import GlobalStyles from "./styles/GlobalStyles";
import ResetStyles from "./styles/ResetStyles";
import { DARK_THEME, LIGHT_THEME } from "./styles/theme";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? DARK_THEME : LIGHT_THEME}>
      <ResetStyles />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
