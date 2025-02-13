import useCalculatorStore from "../store/calculatorStore";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useCalculatorStore();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded border-2 border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center space-x-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white transition-all duration-300"
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
      <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
    </button>
  );
};

export default ThemeToggle;
