import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BuilderPage from "./pages/BuilderPage";
import CalculatorPage from "./pages/CalculatorPage";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<BuilderPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
