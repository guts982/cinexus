"use client";
import { PropsWithChildren, useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { Provider as ReactReduxProvider } from "react-redux";
import { store } from "@/lib/redux/store";

const ReduxProvider = ({ children }: PropsWithChildren) => {
  return <ReactReduxProvider store={store}>{children}</ReactReduxProvider>;
};

function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  // this line is the key to avoid the error.
  if (!hasMounted) return null;
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

const Provider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <ReduxProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default Provider;
