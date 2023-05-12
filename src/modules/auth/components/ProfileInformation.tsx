import React from "react";
import { Typography, Stack, Box, styled,} from "@mui/material";

const TypographyMod = styled(Typography)(({ theme }) => ({
    marginTop: "20px",
    [theme.breakpoints.up("md")]: {
      paddingLeft: '40px',
    }
  }));

export const ProfileInformation = () => {


    return (
        <Box>
            <Stack>
                <TypographyMod
                    variant="h4"
                >username</TypographyMod>
                <TypographyMod
                    variant="h6">role</TypographyMod>
            </Stack>
        </Box>
    )
};
