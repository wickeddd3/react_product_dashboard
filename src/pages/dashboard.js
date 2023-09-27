import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from '../components/dashboard/Chart.js';
import Deposits from '../components/dashboard/Deposits.js';
import Orders from '../components/dashboard/Orders.js';
import Breadcrumb from '../components/common/Breadcrumb.js';

export default function DashboardPage() {
  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 4, mb: 4 }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Grid item>
          <Breadcrumb />
        </Grid>
        <Grid item></Grid>
      </Grid>
      <Grid
        container
        spacing={3}
      >
        {/* Chart */}
        <Grid
          item
          xs={12}
          md={8}
          lg={9}
        >
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Chart />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid
          item
          xs={12}
          md={4}
          lg={3}
        >
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Deposits />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid
          item
          xs={12}
        >
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
