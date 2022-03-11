import * as React from 'react';
import {Toolbar, AppBar, Box, Typography, Button, Avatar, Menu, MenuItem, CssBaseline} from "@mui/material";
import {HeaderBar} from "../index";
function Layout({children}) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <CssBaseline/>
            <HeaderBar/>
            {children}
        </Box>
    );
}
export { Layout };
