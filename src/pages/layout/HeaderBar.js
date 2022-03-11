import * as React from 'react';
import { Toolbar, AppBar, Box, Typography, Button, Avatar, Menu, MenuItem } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function HeaderBar(props) {
    const location = useLocation();
    useEffect(()=>{
        console.log(location.pathname)
    },[location])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                    >
                        Test Task
                    </Typography>
                    <Box sx={{flexGrow:1}}></Box>
                    {/*<Button color="inherit" href="/" className={location.pathname=='/'?'menu_button active':'menu_button'}>
                        Landing
                    </Button>
                    <Button color="inherit" href="/processing" className={location.pathname=='/processing'?'menu_button active':'menu_button'}>
                        Pdf Processing
                    </Button>*/}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export { HeaderBar };
