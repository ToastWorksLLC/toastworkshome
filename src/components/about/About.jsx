import jeff from "../../images/IMG_0243.JPG";
import Box from "@mui/material/Box";
import React, {useEffect} from "react";
import {ThemeProvider} from "@mui/material";
import {theme} from "../ThemeOptions.jsx";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function About() {

    useEffect(() => {
        console.log('Route loaded:', window.location.pathname);
    }, []);

    return (
       <>
           <ThemeProvider theme={theme}>
           <Box
               sx={{
                   display: 'flex',
                   justifyContent: 'center',
                   alignItems: 'center',
                   height: '100vh',
               }}
           >
               <img src={jeff} alt={"A man against the wall"} style={{
                   maxWidth: '50%',
                   maxHeight: '50%',
               }} />
               <Box
                   sx={{
                       textAlign: 'left', // Aligns text to the left inside the box
                   }}
               >
                   <h4>Jeffery Phipps taught AP level computer science, read for AP grading and was also a table leader.
                       Also, Jeffery is a Regional Manager and Specialist for the Microsoft Philanthropies TEALS Program, where he helps schools with computer science curriculum selection.
                   <p>Jeffery is opening looking for work in project management and/or software development. Reach out for references and resume.</p>
                   </h4>
                   <div>
                       <IconButton
                           component="a"
                           href="https://www.linkedin.com/in/jefferyphipps/"
                           target="_blank"
                           rel="noopener noreferrer"
                       >
                           <LinkedInIcon color="primary" fontSize="large" />
                       </IconButton>
                       <IconButton
                           component="a"
                           href="https://github.com/jefferycphipps"
                           target="_blank"
                           rel="noopener noreferrer"
                       >
                           <GitHubIcon color="action" fontSize="large" />
                       </IconButton>
                   </div>
                    <p>Look for other ToastWorks profiles soon</p>
               </Box>
           </Box>
           </ThemeProvider>
       </>

    );


}
