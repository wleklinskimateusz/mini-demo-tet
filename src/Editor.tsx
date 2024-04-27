import {
  TetrislyThemeEditor,
  tokensJSONtoTheme,
} from "@virtuslab/tetrisly-theme-editor";
import { useContext } from "react";
import { ThemeContext } from "./Provider";
import { Theme, tet } from "@virtuslab/tetrisly-react";

export const Editor = () => {
  const { setTheme } = useContext(ThemeContext);
  return (
    <tet.div
      h="600px"
      borderRadius="$border-radius-xLarge"
      overflow="hidden"
      boxShadow="$elevation-bottom-300"
    >
      <TetrislyThemeEditor
        onChange={(tokens) =>
          setTheme(tokensJSONtoTheme(tokens) as unknown as Theme)
        }
      />
    </tet.div>
  );
};
