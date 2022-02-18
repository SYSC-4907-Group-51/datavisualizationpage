import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

export const TotalProfit = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            Distance
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            1.67 Km
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <FmdGoodIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);