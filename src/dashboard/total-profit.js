import React, { useRef, useState, useEffect } from "react"
import { Avatar, Card, CardContent, Grid, Typography, Button } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { useAuth } from "../contexts/AuthContext";

export const TotalProfit = (props) => {
  const dateToday = new Date()
  dateToday.setDate(dateToday.getDate() -1)
  const startDate = new Date()
  startDate.setDate(startDate.getDate() - 2)
  const [error, setError] = useState("")
  const { timeSeriesData } = useAuth()
  const steps = "step"
  const [distanceVal, setDistanceVal]= useState("")

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

async function getDistance(e) {
  e.preventDefault()

     try {
         setError("")
         const response = await timeSeriesData(steps, formatDate(startDate), formatDate(dateToday))
         console.log(response)
        //  console.log(response.data[1].efficiency)
        //  setEfficiencyVal(response.data[1].efficiency)
        //  if (response.status_code === 200 ){
        //     setEfficiencyVal(response.data[1].efficiency)  
        //  }
     }
     catch {
         setError("Can't get steps")
     }

   }

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
            {/* Distance */}
            <Button onClick = {getDistance}>HEY</Button>
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
};