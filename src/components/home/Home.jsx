import {ThemeProvider} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

import {theme} from "../ThemeOptions.jsx";

import logo from "../../images/web-app-manifest-512x512.png";


export default function  Home(){


    return(
        <ThemeProvider theme={theme}>

        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center', // Centers the box horizontally
                alignItems: 'center', // Centers the box vertically
                height: '100vh', // Makes the box fill the height of the viewport
            }}
        >
            <img src={logo} alt={"A happy toaster"} style={{
                maxWidth: '50%',
                maxHeight: '50%',
            }} />
            <Box
                sx={{
                    textAlign: 'left', // Aligns text to the left inside the box
                }}
            >
                <p>Welcome to ToastWorks LCC. Founded in 2025. We offer <strong>custom, technically advanced websites and computer science educational consulting</strong>. Use the menu to learn more!</p>

            </Box>
        </Box>
    </ThemeProvider>

    );





}