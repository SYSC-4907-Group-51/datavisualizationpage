import React, { useRef, useState, useEffect } from "react"
import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography, Button } from '@mui/material';
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { useAuth } from "../contexts/AuthContext";

export const TasksProgress = (props) => {
  const dateToday = new Date()
  dateToday.setDate(dateToday.getDate() -1)
  const startDate = new Date()
  startDate.setDate(startDate.getDate() - 2)
  const [error, setError] = useState("")
  const { timeSeriesData } = useAuth()
  const sleep = "sleep"
  const [efficiencyVal, setEfficiencyVal]= useState("")

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
  const getEfficiency2 = async () => {
    const response = await timeSeriesData(sleep, formatDate(startDate), formatDate(dateToday))
           console.log(response)
           console.log(response.data[1].efficiency)
           if (response.status_code === 200 ){
              setEfficiencyVal(response.data[1].efficiency)  
           }
  };
  getEfficiency2();
}, []);

  async function getEfficiency(e) {
    e.preventDefault()
  
       try {
           setError("")
           const response = await timeSeriesData(sleep, formatDate(startDate), formatDate(dateToday))
           console.log(response)
           console.log(response.data[1].efficiency)
           setEfficiencyVal(response.data[1].efficiency)
           if (response.status_code === 200 ){
              setEfficiencyVal(response.data[1].efficiency)  
           }
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
            Sleep Efficiency
            {/* <Button onClick = {getEfficiency}>HEY</Button> */}
            {/* {efficiencyVal} */}
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {efficiencyVal}%
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
          value={efficiencyVal}
          variant="determinate"
        />
      </Box>
    </CardContent>
  </Card>
  );
};