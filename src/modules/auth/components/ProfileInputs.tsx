import React from "react";
import { Grid, styled } from "@mui/material";
import { Typography, Stack, TextField, Button } from "@mui/material";

const InputGrid = styled(Grid)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down("sm")]: {
        marginBottom:"20px",
    }
}));

export const ProfileInputs = () => {


    return (
        <form>
            <Stack
                sx={{
                    width: "100%",
                    marginTop: "5px",
                    borderTop: "1px solid #dfdfdf",
                    paddingTop: "20px"
                }}>
                <Grid container>
                    <InputGrid
                        item
                        sm={4}
                        xs={12}>
                        <Typography>
                            Username
                        </Typography>
                    </InputGrid>
                    <Grid
                        item
                        sm={8}
                        xs={12}>
                        <TextField
                            id="outlined-basic"
                            label="Username"
                            variant="outlined"
                            size='small'
                            sx={{ width: '95%' }}
                        />
                    </Grid>
                </Grid>
            </Stack>
            <Stack
                sx={{
                    width: "100%",
                    marginTop: "18px"
                }}>
                <Grid container>
                    <InputGrid
                        item
                        sm={4}
                        xs={12}>
                        <Typography>
                            Email
                        </Typography>
                    </InputGrid>
                    <Grid
                        item
                        sm={8}
                        xs={12}>
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            size='small'
                            sx={{
                                width: '95%'
                            }}
                        />
                    </Grid>
                </Grid>
            </Stack>
            <Stack
                sx={{
                    width: "100%",
                    marginTop: "18px"
                }}>
                <Grid container>
                    <InputGrid
                        item
                        sm={4}
                        xs={12}>
                        <Typography>
                            Password
                        </Typography>
                    </InputGrid>
                    <Grid
                        item
                        sm={8}
                        xs={12}>
                        <TextField
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            size='small'
                            sx={{
                                width: '95%'
                            }}
                        />
                    </Grid>
                </Grid>
            </Stack>
            <Stack
                sx={{
                    width: "100%",
                    marginTop: "18px"
                }}>
                <Grid container>
                    <InputGrid
                        item
                        sm={4}
                        xs={12}>
                        <Typography>
                            Full name
                        </Typography>
                    </InputGrid>
                    <Grid
                        item
                        sm={8}
                        xs={12}>
                        <TextField
                            id="outlined-basic"
                            label="Full name"
                            variant="outlined"
                            size='small'
                            sx={{
                                width: '95%'
                            }}
                        />
                    </Grid>
                </Grid>
            </Stack>
            <Stack>
                <Button
                    type="submit"
                    sx={{
                        marginTop: "20px",
                        width: "10%",
                    }}
                    variant="outlined">
                    Salvar
                </Button>
            </Stack>
        </form>
    )
}; 