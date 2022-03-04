import React, { useRef, useState, useEffect } from "react"
import { Avatar, Card, CardContent, Grid, Typography, Button } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAuth } from "../contexts/AuthContext";

export const TotalProfit = (props) => {
  const dateToday = new Date()
  dateToday.setDate(dateToday.getDate() -1)
  const startDate = new Date()
  startDate.setDate(startDate.getDate() - 2)
  const [error, setError] = useState("")
  const { timeSeriesData, intradayData } = useAuth()
  const steps = "step"
  const heartrate = "heartrate"
  const [heartrateVal, setHeartRateVal]= useState("")

  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDate()),
        year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

useEffect(() => {
  const getHeartRate = async () => {
    const response = await intradayData(heartrate, formatDate(dateToday))
    console.log(response)
    if (response.status_code === 400){
      setHeartRateVal(response.time_series.resting_heartrate)
    }
    else {
      setHeartRateVal("N/A")
    }
  };
  getHeartRate();
}, []); 



  return (
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
            Resting Heart Rate
            {/* <Button onClick = {getDistance}>HEY</Button> */}
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {/* 1.67 Km */}
            {heartrateVal} bpm
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
            <FavoriteIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>

  );
};