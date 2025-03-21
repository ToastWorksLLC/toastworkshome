import React from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {Button, ThemeProvider} from "@mui/material";
import {theme} from "../ThemeOptions.jsx";
import { Link } from 'react-router-dom';

export default function BottomAppBar() {
    return (
            <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" color="error" sx={{ top: 'auto', bottom: 0 }}>
                    <Toolbar sx={{
                        display: 'flex',
                        justifyContent: 'center', // Centers content horizontally
                    }}>
                        <Button  color = "error" variant="contained" component={Link} to="/about" sx={{ textTransform: 'none' }} >
                        <Typography sx={{ flexGrow: 1, textAlign: "center" }}>
                            Meet the team! Click Here.
                        </Typography>
                        </Button>

                    </Toolbar>
                </AppBar>
            </Box>
            </ThemeProvider>
    );
}