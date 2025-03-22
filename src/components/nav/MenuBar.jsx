import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'
import {Button} from "@mui/material";
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';


export default function MenuBar() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar  position="fixed" sx={{ top: 0, left: 0, right: 0 }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : null}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : null}
                            onClick={open ? handleClose : handleClick}
                        >
                            <BreakfastDiningIcon />
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem component={Link} to="/">Home</MenuItem>
                                <MenuItem component={Link} to="/services">Services</MenuItem>
                                <MenuItem component={Link} to="/projects">Projects</MenuItem>
                                <MenuItem component={Link} to="/about">About Us</MenuItem>

                            </Menu>
                        </IconButton>
                        <Toolbar sx={{
                            display: 'flex',
                            justifyContent: 'center', // Centers content horizontally
                        }}>
                            <Button color = "inherit" component={Link} to="/" sx={{ textTransform: 'none' }}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                ToastWorks LLC
                            </Typography>
                            </Button>
                        </Toolbar>
                    </Toolbar>
                </AppBar>
            </Box>
    );
}