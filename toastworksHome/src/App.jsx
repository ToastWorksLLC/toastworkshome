import { useState } from 'react'
import './App.css'
import BottomAppBar from "./components/nav/BottomBar.jsx";
import MenuBar from "./components/nav/MenuBar.jsx";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./components/ThemeOptions.jsx";

import Routers from './components/Routers.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <CssBaseline>
            <ThemeProvider theme = {theme}>
                <MenuBar />
              <div>
                  <Routers />
              </div>
                <BottomAppBar />
            </ThemeProvider>
        </CssBaseline>
    </>

  )
}

export default App
