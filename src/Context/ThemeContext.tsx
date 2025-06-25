import { createContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => {}
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme;

        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute("data-theme", savedTheme)
        }
    }, [])

    const toggleTheme = () => {
        const newTheme: Theme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme); 
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}



