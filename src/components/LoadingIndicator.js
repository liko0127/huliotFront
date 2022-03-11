import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoadingIndicator = (props) => {
    return (
        <Box sx={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0009' }}>
            <CircularProgress color="warning" />
        </Box>
    );
}
export default LoadingIndicator;
