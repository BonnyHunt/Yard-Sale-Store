import React from "react";
import { Grid, CardMedia, Typography } from "@mui/material";
import { ProfileInformation } from "../components/ProfileInformation";
import { ProfileInputs } from "../components/ProfileInputs";
import logo from "../../../shared/assets/reference.jpg";

export const ProfileView = () => {
  return (
    <Grid
      container>
      <Grid
        item
        xs={12}
        sm={12}
        md={3}
      >
        <CardMedia
          component='img'
          alt='logo'
          image={logo}
          sx={{
            maxWidth: '180px',
            maxHeight: '180px',
            borderRadius: '50%',
            marginLeft: '15px',
          }} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={9}>
        <ProfileInformation />
      </Grid>
      <Grid
        xs={12}
        sm={12}>
        <Typography
          variant='h6'
          sx={{
            marginTop: '40px'
          }}>Account</Typography>
      </Grid>
      <Grid
        item
        xs={12}>
        <ProfileInputs />
      </Grid>
    </Grid>
  )
}
