import {
  TetrislyProvider,
  Theme,
  theme as defaultTheme,
} from "@virtuslab/tetrisly-react";
import { ReactNode, createContext, useState } from "react";

export const ThemeContext = createContext<{
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}>({
  theme: defaultTheme,
  setTheme: () => {},
});

export const Provider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(defaultTheme);
  return (
    <TetrislyProvider theme={theme}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </TetrislyProvider>
  );
};
