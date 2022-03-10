import React, { useRef, useState, useEffect } from "react"
import { Avatar, Box, Card, CardContent, Grid, Typography, Button } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { useAuth } from "../contexts/AuthContext";

export const TotalCustomers = (props) => {
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const { intradayData } = useAuth()
  const heartrate = "heartrate"
  const dateToday = new Date()
  dateToday.setDate(dateToday.getDate() -1)
  const [caloriesVal, setCaloriesVal]= useState("")
  var caloriesTotal = 0

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
  const getCalories2 = async () => {
    const response = await intradayData(heartrate, formatDate(dateToday))
         console.log(response)

         for (var i = 0; i < response.data.time_series.heartrate_zones.length; i++) {
          caloriesTotal += response.data.time_series.heartrate_zones[i].caloriesOut
        }
        console.log(caloriesTotal)
        setCaloriesVal(Math.round(caloriesTotal))
  };
  getCalories2();
}, []); 

// async function getCalories(e) {
//     e.preventDefault()
  
//      try {
//          setError("")
//          const response = await intradayData(heartrate, formatDate(dateToday))
//          console.log(response)

//          for (var i = 0; i < response.data.time_series.heartrate_zones.length; i++) {
//           caloriesTotal += response.data.time_series.heartrate_zones[i].caloriesOut
//         }
//         console.log(caloriesTotal)
//         setCaloriesVal(Math.trunc(caloriesTotal))
//      }
//      catch {
//          setError("Can't get steps")
//      }
  
//    }

  return(
    <Card
    sx={{ height: '100%' }} 
    {...props}>
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
            Calories Burned
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {/* 1,906 */}
            {/* <Button onClick = {getCalories}>HEY</Button> */}
            {caloriesVal}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
            <LocalFireDepartmentIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        {/* <ArrowUpwardIcon color="success" />
        <Typography
          variant="body2"
          sx={{
            mr: 1
          }}
        >
          16%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since yesterday
        </Typography> */}
      </Box>
    </CardContent>
  </Card>

  );
};