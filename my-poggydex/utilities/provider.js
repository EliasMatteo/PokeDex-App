import { useContext, createContext, useState } from "react";
import { themes } from "./variables";

const initalStates = {
  theme: "dark",
  setTheme: () => {},
};

const MyThemeContext = createContext(initalStates);

export default function MyThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <MyThemeContext.Provider value={{ theme, setTheme }}>
      <style jsx global>
        {`
          body {
            background-color: ${themes[theme].body};
            font-color: ${themes[theme].body};
          }
        `}
      </style>
      {children}
    </MyThemeContext.Provider>
  );
}

export function useTheme() {
  const { theme, setTheme } = useContext(MyThemeContext);
  return { theme, setTheme };
}
