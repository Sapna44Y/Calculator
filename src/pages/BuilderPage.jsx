import DraggableItem from "../components/DraggableItem";
import DropZone from "../components/DropZone";

const BuilderPage = () => {
  return (
    <div
      className="max-w-[900px] mx-auto p-6 rounded-lg shadow-lg transition-colors duration-300 
      bg-gradient-to-r from-blue-300 to-blue-500 dark:from-gray-800 dark:to-gray-900"
    >
      {/* Title */}
      <h1 className="text-center text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Drag & Drop Calculator Builder
      </h1>

      <div className="flex gap-6">
        {/* Left Side: Draggable Components */}
        <div
          className="w-1/3 p-4 rounded-lg shadow-md transition-all duration-300 
          bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        >
          <h2 className="font-bold mb-3 text-gray-800 dark:text-white">
            Components
          </h2>

          <div className="grid grid-cols-3 gap-2">
            {[
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "0",
              "+",
              "-",
              "*",
              "/",
            ].map((char) => (
              <DraggableItem key={char} id={char} label={char} />
            ))}
          </div>
        </div>

        {/* Right Side: Drop Zone */}
        <div
          className="w-2/3 p-4 rounded-lg shadow-md transition-all duration-300 
          bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        >
          <h2 className="font-bold mb-3 text-gray-800 dark:text-white">
            Drop Zone
          </h2>
          <DropZone />
        </div>
      </div>
    </div>
  );
};

export default BuilderPage;
