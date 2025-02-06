// src/components/ThemeToggle.tsx
import { FC } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

type ThemeToggleProps = {
  theme: string;
  setTheme: (theme: string) => void;
};

const ThemeToggle: FC<ThemeToggleProps> = ({ theme, setTheme }) => (
  <button
    onClick={() => setTheme(theme === 'space' ? 'mountain' : 'space')}
    className="fixed bottom-4 right-4 p-3 bg-[var(--text-color)] text-white rounded-full shadow-lg hover:opacity-80"
  >
    {theme === 'space' ? <FaMoon className="text-xl" /> : <FaSun className="text-xl" />}
  </button>
);

export default ThemeToggle;