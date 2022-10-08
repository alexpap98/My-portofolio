import { Route, Routes } from "react-router-dom";
import About from "./components/pages/about";
import Home from "./components/pages/home";
import Projects from "./components/pages/projects";
import NotFound from "./components/pages/NotFound";


function Map() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Map;