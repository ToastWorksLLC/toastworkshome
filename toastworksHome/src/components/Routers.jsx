
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home.jsx";
import About from "./about/About.jsx";


function Routers (){

    return(
        <>
            <Routes>

                <Route path="/"  element={<Home />} />
                <Route path="/about"  element={<About />} />
            </Routes>

        </>

    );
}
export default Routers;