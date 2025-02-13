import { create } from "zustand";

const useCalculatorStore = create((set) => ({
  components: [],
  expression: "",
  result: null,
  darkMode: false,

  addComponent: (component) =>
    set((state) => ({
      components: [...state.components, component],
    })),

  setExpression: (updateFn) =>
    set((state) => ({
      expression: updateFn(state.expression),
    })),

  evaluateExpression: () =>
    set((state) => {
      try {
        if (!state.expression.trim()) return { result: "Error" };

        // Avoid invalid expressions like "5++2" or "3**2"
        if (/[^0-9+\-*/]/.test(state.expression)) return { result: "Error" };

        const safeEval = new Function("return " + state.expression);
        return { result: safeEval().toString(), expression: "" }; // Reset expression after evaluation
      } catch (error) {
        return { result: "Error", expression: "" };
      }
    }),

  clearCalculator: () =>
    set(() => ({
      components: [],
      expression: "",
      result: null,
    })),

  toggleDarkMode: () =>
    set((state) => {
      const newMode = !state.darkMode;
      if (newMode) {
        document.documentElement.classList.add("dark"); // Enable dark mode
      } else {
        document.documentElement.classList.remove("dark"); // Disable dark mode
      }
      return { darkMode: newMode };
    }),
}));

export default useCalculatorStore;
