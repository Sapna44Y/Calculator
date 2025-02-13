const Display = ({ value }) => {
  return (
    <div className="mb-4 p-4 bg-gray-900 text-right text-2xl font-mono border border-gray-700 rounded-lg shadow-md">
      {value || "0"}
    </div>
  );
};

export default Display;
