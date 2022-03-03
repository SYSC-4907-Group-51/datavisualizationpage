import React, { useRef, useState, useEffect } from "react"
import { Avatar, Box, Card, CardContent, Grid, Typography, Button} from '@mui/material';
import { Form } from 'react-bootstrap'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import { useAuth } from "../contexts/AuthContext";
import { dateRangePickerDayClasses } from "@mui/lab";


export const Budget = (props) => {
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const { intradayData } = useAuth()
  const { timeSeriesData } = useAuth()
  const step = "step"
  const heartrate = "heartrate"
  const dateToday = new Date()
  dateToday.setDate(dateToday.getDate() -1)
  const [stepVal, setStepVal]= useState("")

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
  const getSteps2 = async () => {
    const response = await intradayData(step, formatDate(dateToday))
        console.log(response)
        if (response.status_code === 200 ){
            // return response.data.steps
            console.log(response.data.time_series.steps)
            setStepVal(response.data.time_series.steps)
            return response.data.time_series.steps
        }
  };
  getSteps2();
}, []);

  // async function getSteps(e) {
  //   e.preventDefault()
  
  //   try {
  //       setError("")
  //       const response = await intradayData(step, formatDate(dateToday))
  //       console.log(response)
  //       if (response.status_code === 200 ){
  //           // return response.data.steps
  //           console.log(response.data.time_series.steps)
  //           setStepVal(response.data.time_series.steps)
  //           return response.data.time_series.steps
  //       }
  //   }
  //   catch {
  //       setError("Can't get steps")
  //   }
  
  // }

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
            Steps
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {stepVal}
            {/* <Button onClick = {getData}>HEY</Button> */}
            {/* <div onLoad = {getSteps}></div> */}
            {/* 2,297 */}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          >
            <DirectionsWalkIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ArrowDownwardIcon color="error" />
        <Typography
          color="error"
          sx={{
            mr: 1
          }}
          variant="body2"
        >
          12%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since yesterday
        </Typography>
      </Box>
    </CardContent>
  </Card>

  );

}; 