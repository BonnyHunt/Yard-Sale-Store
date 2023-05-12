import React from 'react';
import { useState } from 'react';
import { Stack, TextField, Button} from "@mui/material";

export const UserInputs = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    return(
        <>
            <Stack
            direction='row'
            sx={{
                width: '100%',
                justifyContent: 'center',
            }} >
                <TextField
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    size='small'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    sx={{
                        width: '90%'
                    }} >{ }</TextField>
            </Stack>

            <Stack
            direction='row'
            sx={{
                width: '100%',
                marginTop: '15px',
                justifyContent: 'center',
            }} >
                <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    size='small'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{
                        width: '90%'
                    }} >{ }</TextField>
            </Stack>

            <Stack
            sx={{
            width: '90%',
            height: '30px',
            marginTop: '25px'
            }} 
            spacing={2} 
            direction="row">
                <Button
                    sx={{
                    width: '100%',
                    borderRadius: '1px',
                    }}
                    variant="contained"
                >SIGN IN</Button>
            </Stack>
        </>
    )
}