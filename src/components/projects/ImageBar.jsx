import {ImageList, ImageListItem, ImageListItemBar, ListSubheader} from "@mui/material";


import homePage from "../../images/homePage.png";
import eventPage from "../../images/eventPage.png";
import createPage from "../../images/createEvent.png";
import ez3homePage from "../../images/ez3homePage.png";
import {useEffect, useRef, useState} from "react";

export default function ImageBar(name) {

    const [images, setImages] = useState([]);
    const showRunner = [
        {
            src: homePage,
            title: 'Home Page',
        },
        {
            src: eventPage,
            title: 'Event page',
        },
        {
            src: createPage,
            title: 'Create page',
        },];

    const eZ3 = [
        {
            src: ez3homePage,
            title: 'Home Page',
        },];

   useEffect(() => {
       if(name.name === "showRunner") {
           setImages([...showRunner]);
       }
       if(name.name === "eZ3") {
           setImages([...eZ3]);
       }
   }, [name.name]);

    return (
        <ImageList sx={{ width: 500, height: 450 }}>
            <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">ScreenShots</ListSubheader>
            </ImageListItem>
            {images && images.length > 0 && (
                images.map((item, index) => (
                <ImageListItem key={index}>

                    <img
                        src={item.src}
                        alt={item.title}
                    />
                    <ImageListItemBar
                        title={item.title}
                    />
                </ImageListItem>
            )))}
        </ImageList>
    );
}

