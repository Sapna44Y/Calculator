import { useState } from "react";
import Button from "../components/Button";
import Display from "../components/Display";
import useCalculatorStore from "../store/calculatorStore";

const CalculatorPage = () => {
  const [input, setInput] = useState("");
  const { darkMode } = useCalculatorStore(); // Get theme state

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div
        className={`p-6 rounded-lg shadow-lg w-80 transition-colors duration-300 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
      >
        <Display value={input} />
        <div className="grid grid-cols-4 gap-2 mt-4">
          {[..."789/456*123-0C=+"].map((char) => (
            <Button
              key={char}
              label={char}
              onClick={() =>
                setInput((prev) =>
                  char === "=" ? eval(prev) : char === "C" ? "" : prev + char
                )
              }
              className={`p-4 rounded text-lg font-bold transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-800"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
