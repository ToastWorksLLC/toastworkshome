
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home.jsx";
import About from "./about/About.jsx";
import Services from "./services/Services.jsx";
import Projects from "./projects/Projects.jsx";

function Routers (){

    return(
        <>
            <Routes>

                <Route path="/"  element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about"  element={<About />} />
            </Routes>

        </>

    );
}
export default Routers;