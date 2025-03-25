import jeff from "../../images/jeff.JPG";
import maddy from "../../images/maddy.jpg"
import richard from "../../images/richard.jpg"
import Box from "@mui/material/Box";
import React, {useEffect} from "react";
import {Divider, ThemeProvider} from "@mui/material";
import {theme} from "../ThemeOptions.jsx";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

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
                       flexDirection: 'row', // Images and text side-by-side by default
                       justifyContent: 'left',
                       alignItems: 'left',
                        marginTop: '64px',
                       flexWrap: 'wrap', // Ensures wrapping for smaller screens
                       '@media (max-width: 768px)': { // For screens 768px and smaller
                           flexDirection: 'column', // Stacks the image and text vertically
                           alignItems: 'center',
                       },
               }}
           >
               <img src={jeff} alt={"A man against the wall"} style={{
                   width: '100%',
                   maxWidth: '50%', // Ensures it adapts to smaller screens
                   height: 'auto',  // Maintains aspect ratio
                   objectFit: 'contain', // Ensures the entire image fits within the container
                   padding: '8px', // Adds some spacing around the image
                   borderRadius: '8px', // Optional, for a softer look
                   boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
               }} />
               <Box
                   sx={{
                       textAlign: 'left',
                       padding: '1rem',
                       maxWidth: '90%', // Restricts the text width on mobile
                       overflow: 'hidden', // Prevents any overflow
                       '@media (max-width: 768px)': {
                           textAlign: 'center', // Centers the text on smaller screens
                           padding: '0.5rem', // Adjusts padding for compact layout
                       },
                   }}
               >
                   <h4>Jeffery Phipps brings a wealth of expertise in computer science education and program management. As an AP Computer Science teacher, AP exam reader, and table leader, he has demonstrated his dedication to academic excellence and mentorship.
                       In his current role as Regional Manager and Specialist for Microsoft Philanthropies' TEALS Program, Jeffery empowers schools to implement effective computer science curricula, driving innovation in education.
                   <p>Jeffery is now actively seeking opportunities in project management or software development, where he can apply his leadership skills and technical expertise. References and his resume are available upon request.</p>
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
                       <IconButton
                           component="a"
                           href="mailto:jeffery@toastworksllc.com"
                           target="_blank"
                           rel="noopener noreferrer"
                       >
                           <MailIcon color="action" fontSize="large" />
                       </IconButton>
                   </div>
               </Box>
           </Box>
               <Divider
               sx={{
                   margin: '16px 0', // Adds spacing above and below the Divider
                   borderColor: 'gray', // Changes the color of the Divider
               }}
                />
               <Box
                   sx={{
                       display: 'flex',
                       flexDirection: 'row', // Images and text side-by-side by default
                       justifyContent: 'left',
                       alignItems: 'left',
                       flexWrap: 'wrap', // Ensures wrapping for smaller screens
                       '@media (max-width: 768px)': { // For screens 768px and smaller
                           flexDirection: 'column', // Stacks the image and text vertically
                           alignItems: 'center',
                       },
                   }}
               >
                   <img src={maddy} alt={"A woman with glasses smiling in a park"} style={{
                       width: '100%',
                       maxWidth: '50%', // Ensures it adapts to smaller screens
                       height: 'auto',  // Maintains aspect ratio
                       objectFit: 'contain', // Ensures the entire image fits within the container
                       padding: '8px', // Adds some spacing around the image
                       borderRadius: '8px', // Optional, for a softer look
                       boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
                   }} />
                   <Box
                       sx={{
                           textAlign: 'left',
                           padding: '1rem',
                           maxWidth: '90%', // Restricts the text width on mobile
                           overflow: 'hidden', // Prevents any overflow
                           '@media (max-width: 768px)': {
                               textAlign: 'center', // Centers the text on smaller screens
                               padding: '0.5rem', // Adjusts padding for compact layout
                           },
                       }}
                   >
                       <h4>Maddy Preston has worked as a journalist and digital media specialist and has a background in freelance web design. She currently works as a print and media designer while transitioning to a career in software development.
                           <p>Maddy is open to roles in software development. Reach out for resume or to discuss any projects.</p>

                       </h4>
                       <div>
                           <IconButton
                               component="a"
                               href="https://www.linkedin.com/in/madison-preston-profile/"
                               target="_blank"
                               rel="noopener noreferrer"
                           >
                               <LinkedInIcon color="primary" fontSize="large" />
                           </IconButton>
                           <IconButton
                               component="a"
                               href="https://github.com/mpres08"
                               target="_blank"
                               rel="noopener noreferrer"
                           >
                               <GitHubIcon color="action" fontSize="large" />
                           </IconButton>
                           <IconButton
                               component="a"
                               href="mailto:maddy@toastworksllc.com"
                               target="_blank"
                               rel="noopener noreferrer"
                           >
                               <MailIcon color="action" fontSize="large" />
                           </IconButton>
                       </div>
                   </Box>
               </Box>
               <Divider
                   sx={{
                       margin: '16px 0', // Adds spacing above and below the Divider
                       borderColor: 'gray', // Changes the color of the Divider
                   }}
               />
               <Box
                   sx={{
                       display: 'flex',
                       flexDirection: 'row', // Images and text side-by-side by default
                       justifyContent: 'left',
                       alignItems: 'left',
                       flexWrap: 'wrap', // Ensures wrapping for smaller screens
                       '@media (max-width: 768px)': { // For screens 768px and smaller
                           flexDirection: 'column', // Stacks the image and text vertically
                           alignItems: 'center',
                       },
                   }}
               >
                   <img src={richard} alt={"A man against the wall"} style={{
                       width: '100%',
                       maxWidth: '50%', // Ensures it adapts to smaller screens
                       height: 'auto',  // Maintains aspect ratio
                       objectFit: 'contain', // Ensures the entire image fits within the container
                       padding: '8px', // Adds some spacing around the image
                       borderRadius: '8px', // Optional, for a softer look
                       boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
                   }} />
                   <Box
                       sx={{
                           textAlign: 'left',
                           padding: '1rem',
                           maxWidth: '90%', // Restricts the text width on mobile
                           overflow: 'hidden', // Prevents any overflow
                           '@media (max-width: 768px)': {
                               textAlign: 'center', // Centers the text on smaller screens
                               padding: '0.5rem', // Adjusts padding for compact layout
                           },
                       }}
                   >
                       <h4>Richard Scarfino is a Launch Code graduate and a passionate full-stack web developer.
                           Currently working as the Foreman at a small construction company, he continues to build Progressive Web Applications (PWAs) while actively pursuing opportunities to apply his skills in the tech industry.
                           <p>Richard is looking for roles in software development and web development.</p>
                       </h4>
                       <div>
                           <IconButton
                               component="a"
                               href="https://www.linkedin.com/in/richard-scarfino/"
                               target="_blank"
                               rel="noopener noreferrer"
                           >
                               <LinkedInIcon color="primary" fontSize="large" />
                           </IconButton>
                           <IconButton
                               component="a"
                               href="https://github.com/scarfinor"
                               target="_blank"
                               rel="noopener noreferrer"
                           >
                               <GitHubIcon color="action" fontSize="large" />
                           </IconButton>
                           <IconButton
                               component="a"
                               href="mailto:richard@toastworksllc.com"
                               target="_blank"
                               rel="noopener noreferrer"
                           >
                               <MailIcon color="action" fontSize="large" />
                           </IconButton>
                       </div>
                   </Box>
               </Box>
           </ThemeProvider>
       </>

    );


}
