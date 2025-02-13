const Button = ({ label, onClick }) => {
  return (
    <button
      className={`text-lg font-bold p-4 rounded-lg transition-all duration-200
        ${label === "=" ? "bg-blue-500 hover:bg-blue-600" : ""}
        ${label === "C" ? "bg-red-500 hover:bg-red-600" : ""}
        ${/[0-9]/.test(label) ? "bg-gray-700 hover:bg-gray-600" : ""}
        ${
          /[+\-*/]/.test(label)
            ? "bg-yellow-500 hover:bg-yellow-600 text-gray-900"
            : ""
        }
        focus:outline-none shadow-md active:scale-95`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
