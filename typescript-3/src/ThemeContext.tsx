import { createContext } from "react";

const ThemeContext = createContext<[string, (theme: string) => void]>([
  "green",
  () => {},
]);

export default ThemeContext;
