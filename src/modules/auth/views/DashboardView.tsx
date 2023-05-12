import React, { useState } from "react";
import { Button, Card, Grid} from "@mui/material";
import { DoughnutChart } from "../components/DoughnutChart";
import { LineChart } from "../components/LineChart";
import { email } from "../../home/views/HomeView";
import { useCreateStripeCustomer } from "../../../Hooks/stripeHooks";

export const DashboardView = () => {
    const [state, setState] = useState<string>('');
    const stripeCreatedCustomer = useCreateStripeCustomer(state);

    console.log(stripeCreatedCustomer);

    const emailHanddler = () => {
        setState(email);
    };

    return (
        <>
            <Grid
                container>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}>

                    <Card
                        sx={{
                            width: '100%',
                            height: 'auto',
                        }}>
                        <DoughnutChart />
                    </Card>
                </Grid>


                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={8}
                    sx={{
                        display: 'flex',
                    }}>
                    <Card
                        sx={{
                            width: '100%',
                            height: 'auto',
                            marginLeft: {sm:'0px', md:'20px'},
                            marginTop: {xs:'10px', sm:'10px', md:'0px'}
                        }}>
                        <LineChart />
                    </Card>
                </Grid>
            </Grid>
            <Button onClick={emailHanddler} variant="contained">Contained</Button>
        </>
    )
};