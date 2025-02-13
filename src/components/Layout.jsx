import { useNavigate } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import useCalculatorStore from "../store/calculatorStore";

const Layout = ({ children }) => {
  const { darkMode } = useCalculatorStore();
  const navigate = useNavigate();

  return (
    <div
      className={`${
        darkMode ? "dark bg-black text-white" : "bg-gray-100 text-black"
      } min-h-screen transition-all duration-300`}
    >
      {/* Header */}
      <header className="p-4 flex justify-between items-center bg-gray-300 dark:bg-gray-800 shadow-md">
        {/* Clickable Heading */}
        <button
          onClick={() => navigate("/")}
          className="text-2xl font-bold tracking-wide transition duration-300 
          hover:text-blue-500 dark:hover:text-blue-300"
        >
          Calculator Builder
        </button>

        {/* Navigation + Theme Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/calculator")}
            className="relative px-4 py-2 rounded-lg font-semibold border-none transition-all duration-300 
            bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-200 
            hover:bg-gray-400 dark:hover:bg-gray-600 hover:text-white dark:hover:text-gray-300"
          >
            Calculator Page
          </button>

          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-6 transition-all duration-300">
        {children}
      </main>
    </div>
  );
};

export default Layout;
