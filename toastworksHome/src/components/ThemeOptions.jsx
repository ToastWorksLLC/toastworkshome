import {createTheme} from "@mui/material";







export const theme  = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#2d2d2a',
        },
        secondary: {
            main: '#4c4c47',
        },
        error: {
            main: '#848fa5',
        },
        info: {
            main: '#c14953',
        },
        background: {
            default: '#FFFFFF',
        },
        nav: {
            main: '#e5dcc5',
            text: '#e7865d'
        },
    },
    typography: {
        fontFamily: 'system-ui',
    },
});

