import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
