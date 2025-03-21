import jeff from "../../images/IMG_0243.JPG";
import Box from "@mui/material/Box";
import React from "react";

export default function About() {

    return (
       <>
           <Box
               sx={{
                   display: 'flex',
                   justifyContent: 'center', // Centers the box horizontally
                   alignItems: 'center', // Centers the box vertically
                   height: '100vh', // Makes the box fill the height of the viewport
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
                   <h5>Jeffery Phipps taught AP level computer science, read for AP grading and was also a table leader.
                       Also, Jeffery is a Regional Manager and Specialist for the Microsoft Philanthropies TEALS Program, where he helps schools with computer science curriculum selection.
                   </h5>


               </Box>
           </Box>
       </>

    );


}
