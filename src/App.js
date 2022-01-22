import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/pages/about";
import Home from "./components/pages/home";
import Projects from "./components/pages/projects";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <Layout> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
