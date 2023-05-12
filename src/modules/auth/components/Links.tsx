import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

export const Links = () => {
  return (
    <Box
      sx={{
        width: '90%',
        marginTop: '0.75rem',
        typography: 'body1',
        fontSize: '11px',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
      <Link href="#" underline="hover" color="#1976d2">
        Don't have an account?
      </Link>
    </Box>
  );
}