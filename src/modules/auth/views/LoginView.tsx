import React from "react";
import { Logo } from "../components/Logo";
import { UserInputs } from "../components/UserInputs";
import Container from '@mui/material/Container';

export const LoginView = () => {
    return (
        <Container
            sx={{
                background: 'whitesmoke',
                width: '370px',
                height: '400px',
                marginTop: '180px',
                padding: '0 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: '5px'
            }}>
            <Logo />
            <UserInputs />
        </Container>
    )
};