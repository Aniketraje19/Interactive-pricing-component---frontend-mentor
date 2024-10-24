"use client";

import "./globals.css";
import { Provider } from 'react-redux';
import store from "@/redux/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function ThemeProvider({ children }) {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark'); 
      document.documentElement.setAttribute('data-theme','dark')
    } else {
      document.documentElement.classList.remove('dark'); // Remove 'dark' class from <html>
    }
  }, [theme]);

  return <>{children}</>;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-full dark:bg-black bg-light-pattern dark:bg-dark-pattern"
      >
        <Provider store={store}>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
