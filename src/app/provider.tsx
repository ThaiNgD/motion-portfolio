import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute={"class"}
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default Provider;
