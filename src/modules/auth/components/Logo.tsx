import React from "react";
import { Avatar, Stack } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockIcon from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { deepPurple } from "@mui/material/colors";


const theme = createTheme({
    typography: {
        h2: {
            fontSize: 20,
            color: 'black'
        },
    },
});



export const Logo = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container
                sx={{
                    background: 'whitesmoke',
                    width: '125px',
                    height: '90px',
                    borderRadius: '16px',
                    marginTop: '50px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Stack direction="row" spacing={2}>
                    <Avatar sx={{ bgcolor: deepPurple[500] }}>
                        <LockIcon />
                    </Avatar>
                </Stack>
                <Typography variant="h2">Sign in</Typography>
            </Container>
        </ThemeProvider>
    )
};