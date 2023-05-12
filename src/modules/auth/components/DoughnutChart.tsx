import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';


ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Data 1', 'Data 2'],
  datasets: [
    {
      label: 'Data',
      data: [24, 10],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1,
    },
  ],
};

export const DoughnutChart = () => {
  return (
    <>
      <Box sx={{
        display: 'flex',
        paddingTop: '15px'
      }}>
        <Box sx={{
          width: '80%',
          paddingLeft: '15px'
        }}>
          <Typography
            variant="h6">
            Collected Destination
          </Typography>
          <Typography
            sx={{
              fontSize: '0.8rem'
            }}>
            Number of products collected at intended destination
          </Typography>
        </Box>
        <Box sx={{
          width: '20%',
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center'
        }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-haspopup="true"
            color="inherit" >
            <MoreVertIcon />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          height: 'auto',
          display: 'flex',
          marginTop: '15px',
          padding: '10px',
          borderTop: '1px solid black',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Stack>
          <Doughnut data={data}

            options={
              {
                plugins: {
                  legend: { position: 'right' },
                }
              }} />
        </Stack>


      </Box>
    </>
  )
};
