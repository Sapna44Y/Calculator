import { useDrag } from "react-dnd";

const DraggableItem = ({ id, label }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "COMPONENT",
    item: { id, label },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <button
      ref={drag}
      className={`p-3 m-2 text-lg font-semibold border rounded-lg shadow-md
        bg-gradient-to-r from-blue-500 to-purple-500 text-white
        dark:from-gray-700 dark:to-gray-900 dark:text-gray-200
        hover:from-purple-500 hover:to-blue-500 hover:scale-105 transition-all
        ${isDragging ? "opacity-50" : ""}
      `}
    >
      {label}
    </button>
  );
};

export default DraggableItem;
