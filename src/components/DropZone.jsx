import { useDrop } from "react-dnd";
import useCalculatorStore from "../store/calculatorStore";

const DropZone = () => {
  const {
    components,
    addComponent,
    expression,
    setExpression,
    evaluateExpression,
    result,
    clearCalculator,
  } = useCalculatorStore();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "COMPONENT",
    drop: (item) => {
      addComponent(item);
      setExpression((prev) => prev + item.label); // Append to expression
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`min-h-[250px] p-6 border rounded-xl shadow-lg transition-all duration-300 ${
        isOver
          ? "bg-gray-300 dark:bg-gray-700"
          : "bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
      }`}
    >
      {/* Expression Display */}
      <div className="mb-4 p-3 bg-white dark:bg-gray-900 border rounded-lg shadow-md">
        <h3 className="font-bold text-lg text-gray-700 dark:text-gray-300">
          Expression:
        </h3>
        <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          {expression || "Drop numbers & operators"}
        </p>
      </div>

      {/* Component Buttons */}
      <div className="flex flex-wrap gap-2">
        {components.map((component, index) => (
          <button
            key={index}
            className="p-3 border rounded-lg bg-gray-200 dark:bg-gray-700 text-lg font-semibold text-gray-800 dark:text-white transition-transform transform hover:scale-105 hover:bg-gray-300 dark:hover:bg-gray-600"
            onClick={() => setExpression((prev) => prev + component.label)}
          >
            {component.label}
          </button>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={evaluateExpression}
          className="px-6 py-3 bg-blue-600 text-white text-lg font-bold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          =
        </button>

        <button
          onClick={clearCalculator}
          className="px-6 py-3 bg-red-500 text-white text-lg font-bold rounded-lg shadow-md hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
        >
          Clear
        </button>
      </div>

      {/* Result Display */}
      {result !== null && (
        <div className="mt-6 p-4 bg-green-200 dark:bg-green-700 text-xl font-bold text-gray-900 dark:text-white rounded-lg shadow-md">
          Result: {result}
        </div>
      )}
    </div>
  );
};

export default DropZone;
