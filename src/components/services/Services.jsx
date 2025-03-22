import {theme} from "../ThemeOptions.jsx";
import Box from "@mui/material/Box";
import {ThemeProvider} from "@mui/material";
import React from "react";


export default function Services() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        padding: '32px', // Adds spacing inside the box
                        borderRadius: '8px', // Rounds the corners for a sleek look
                        backgroundColor: '#f9f9f9', // Light background for readability
                        maxWidth: '800px', // Optional: limits the width of the box
                        margin: 'auto', // Centers the box horizontally
                        textAlign: 'left', // Aligns text to the left
                    }}
                >
                    <h2>Custom Designed and Technical Websites</h2>
                    <p>
                        At <strong>ToastWorks LLC</strong>, we create <strong>custom, technically advanced
                        websites</strong> tailored to your needs. Whether you’re looking for a sleek portfolio site or a
                        fully functional web application, we’ve got you covered.
                    </p>
                    <ul>
                        <li><strong>Frontend Tools:</strong> React and Vite for fast and dynamic user interfaces.</li>
                        <li><strong>Backend Solutions:</strong> Fully functional backends powered by Spring and Java.
                        </li>
                        <li><strong>Data Storage:</strong> PostgreSQL or MySQL for secure and reliable databases.</li>
                    </ul>
                    <p>
                        Let us transform your vision into a reality—contact us to discuss your project today!
                    </p>
                    <h2>Computer Science Educational Consulting</h2>
                    <p>
                        Leverage the extensive expertise of <strong>Jeffery Phipps</strong> for your computer science
                        education needs:
                    </p>
                    <ul>
                        <li>AP-level Computer Science Instructor with years of teaching experience.</li>
                        <li>AP Grading Leader: Former reader and <strong>table leader</strong> for AP grading.</li>
                        <li>Regional Manager and Specialist for Microsoft Philanthropies TEALS Program, guiding schools
                            in <strong>selecting and implementing proven CS curricula</strong>.
                        </li>
                    </ul>
                    <p>
                        Whether you’re looking to develop a curriculum, enhance CS education, or receive guidance
                        tailored to your institution, Jeffery is here to help. <strong>Reach out today</strong> to learn
                        more about these consulting services.
                    </p>
                    <h2>Why Choose ToastWorks LLC?</h2>
                    <ul>
                        <li><strong>Based near St. Louis</strong> but open to remote projects worldwide.</li>
                        <li>Delivering tailored solutions for both <strong>web development</strong> and <strong>educational
                            consulting</strong>.
                        </li>
                        <li>Dedicated to achieving your goals with creativity, expertise, and innovation.</li>
                    </ul>
                </Box>
                <Box
                    sx={{
                        display: 'inline-block', // Makes the box fit the content size
                        padding: '16px', // Adds spacing inside the box
                        border: '2px solid #ccc', // Adds a border
                        borderRadius: '8px', // Rounds the corners of the box
                        backgroundColor: '#f9f9f9', // Sets a light background color
                        textAlign: 'center', // Centers the text inside the box
                        ':hover': {borderColor: '#007FFF'}, // Changes border color on hover
                    }}
                >
                    <a href="mailto:jeffery@toastworksllc.com?subject=I would like to learn more?"
                       style={{
                           textDecoration: 'none', // Removes underline
                           color: '#007FFF', // Sets the link color
                           fontWeight: 'bold', // Makes the text bold
                           fontSize: '16px', // Adjusts the font size
                       }}
                    >Email Us today!</a>
                </Box>

            </ThemeProvider>
        </>

    );
}