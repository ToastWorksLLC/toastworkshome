import Box from "@mui/material/Box";
import React, {useEffect} from "react";
import {ThemeProvider} from "@mui/material";
import {theme} from "../ThemeOptions.jsx";
import Typography from "@mui/material/Typography";
import ImageBar from "./ImageBar.jsx";
import homePage from "../../images/homePage.png";
import eventPage from "../../images/eventPage.png";
import createPage from "../../images/createEvent.png";
import ez3homePage from "../../images/ez3homePage.png";
export default function Projects() {

    useEffect(() => {
        console.log('Route loaded:', window.location.pathname);
    }, []);

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        padding: { xs: '8px', sm: '16px', md: '24px' }, // Adjusts padding for smaller screens
                        borderRadius: '8px', // Keeps corners rounded across all devices
                        backgroundColor: '#f9f9f9',
                        maxWidth: { xs: '100%', md: '800px' }, // Full-width for phones, constrained for larger screens
                        margin: '16px auto', // Adds spacing around the box on mobile
                        textAlign: 'left',
                        boxShadow: { xs: 'none', md: '0 4px 6px rgba(0, 0, 0, 0.1)' }, // Remove shadow for mobile simplicity
                    }}
                >
                    <Typography
                        variant="h4"
                        component="a"
                        href="https://www.showrunner.lol"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            textDecoration: 'none', // Removes underline
                            color: 'inherit', // Uses the inherited color (can be customized)
                            ':hover': {
                                color: '#007FFF', // Optional: Change color on hover
                            },
                        }}
                    >ShowRunner.LOL (Click to open)</Typography>
                    <p>
                        <strong>ShowRunner</strong> is a flexible website with several different functions for comics, musicians, and venues to create and showcase events
                        such as open mics, talent showcases, and performances. In addition, for "ShowRunners", they can allow others to sign up for open mics in advance.
                        This makes it easy for comics or musicians to know in advance if they are on the show for that night.
                    </p>

                    <ImageBar name = 'showRunner' />

                    <Typography
                        variant="h4"
                        component="a"
                        href="https://ez-3.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            textDecoration: 'none', // Removes underline
                            color: 'inherit', // Uses the inherited color (can be customized)
                            ':hover': {
                                color: '#007FFF', // Optional: Change color on hover
                            },
                        }}
                    >EZ-3 LEARN APP</Typography>
                    <p>
                        <strong>EZ-3 Learn App</strong> is a comic strip creation site that transforms lessons into experiences. Using the SSUP3 model, users will be able to
                        create cartoons with drag and drop capabilities. Site will be live soon. Built on React and Vite with DND-Kit core.
                    </p>
                    <ImageBar name = 'eZ3' />
                </Box>
            </ThemeProvider>
            </>
    );
}