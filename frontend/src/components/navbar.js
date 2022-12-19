import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {Link} from "react-router-dom";
import {createContext, useContext} from "react";
import AuthContext from "../context/AuthContext";
import LensBlurIcon from '@mui/icons-material/LensBlur';

const pages_logout = ["Aufgabenstellung","Protected","Login","Register"]
const pages_login = ["Aufgabenstellung","Protected"]

function ResponsiveAppBar() {
    const { user, logoutUser } = useContext(AuthContext);
    console.log(user)


    const style_login = {
        display:"flex",
        alignItems:"center"
    }

    const fetchLoginStatus = () => {
        return user?(

            <>
                <Button
                    key={"Logout"}
                    onClick={logoutUser}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {"Logout"}
                </Button>
                <Box sx = {style_login}>
                    <Typography>
                        Logged in
                    </Typography>
                </Box>
            </>) : (
            <>
                <Box sx = {style_login}>
                    <Typography>
                        Logged out
                    </Typography>
                </Box>

            </>
        )
    }

    return (
        <AppBar position="static" sx={{bgcolor:"#2596be"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <LensBlurIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Scrum in Practice
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        { user?
                            (pages_login.map((page)=>(
                        <Button
                            component={Link}
                            key={page}
                            to={`/${page}`}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                            {page}
                        </Button>)))
                            :
                            (pages_logout.map((page)=>(
                                <Button
                                    component={Link}
                                    key={page}
                                    to={`/${page}`}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>)))
                        }
                        {fetchLoginStatus()}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;