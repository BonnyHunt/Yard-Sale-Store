import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import MoreVertIcon from '@mui/icons-material/MoreVert';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Data 1',
      data: [10, 50, 20, 90, 10, 65, 59, 80, 81, 56, 55, 40],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',

    },
    {
      label: 'Data 2',
      data: [50, 10, 30, 90, 120, 84, 91, 10, 50, 20, 90, 10],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const LineChart = () => {
  return (
    <>
      <Box sx={{
        display: 'flex',
        paddingTop: '15px'
      }}>
        <Box sx={{
          width: '80%',
          paddingLeft: '15px',
        }}>
          <Typography
            variant="h6">
            Active Products
          </Typography>
          <Typography
            sx={{
              fontSize: '0.8rem'
            }}>
            Most active products over time
          </Typography>
        </Box>
        <Box sx={{
          width: '20%',
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
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
          padding: '15px',
          borderTop: '1px solid black',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Stack
            sx={{
              width: '100%',
              height: { xs: '100%', sm: '100%', md: '300px' },
            }}>

            <Line data={data} options={{plugins:{legend:{position:'right'}}}} />

          </Stack>
      </Box>
    </>
  )
};