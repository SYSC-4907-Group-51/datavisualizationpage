import React, { useRef, useState, useEffect } from "react"
import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography, Button } from '@mui/material';
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { useAuth } from "../contexts/AuthContext";

export const TasksProgress = (props) => {
  const dateToday = new Date()
  dateToday.setDate(dateToday.getDate() -1)
  const [error, setError] = useState("")
  const { timeSeriesData } = useAuth()
  const sleep = "sleep"

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

  async function getEfficiency(e) {
    e.preventDefault()
  
       try {
           setError("")
           const response = await timeSeriesData(sleep, formatDate(dateToday), formatDate(dateToday))
           console.log(response)
  //       if (response.status_code === 200 ){
  //           // return response.data.steps
  //           console.log(response.data.time_series.steps)
  //           setStepVal(response.data.time_series.steps)
  //           return response.data.time_series.steps
  //       }
       }
       catch {
           setError("Can't get steps")
       }
  
     }

  return (
    <Card
    sx={{ height: '100%' }}
    {...props}
  >
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
            {/* Sleep Efficiency */}
            <Button onClick = {getEfficiency}>HEY</Button>
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            75.5%
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'warning.main',
              height: 56,
              width: 56
            }}
          >
            <NightsStayIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box sx={{ pt: 3 }}>
        <LinearProgress
          value={75.5}
          variant="determinate"
        />
      </Box>
    </CardContent>
  </Card>
  );
};