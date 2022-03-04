import React, { useRef, useState, useEffect } from "react"
import { Doughnut } from 'react-chartjs-2';
import { Box, Card, CardContent, CardHeader, Divider, Typography, useTheme } from '@mui/material';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PhoneIcon from '@mui/icons-material/Phone';
import TabletIcon from '@mui/icons-material/Tablet';
import ReactEcharts from "echarts-for-react";
import AlarmIcon from '@mui/icons-material/Alarm';
import NotificationsPausedIcon from '@mui/icons-material/NotificationsPaused';
import { useAuth } from "../contexts/AuthContext";

export const TrafficByDevice = (props) => {
  const theme = useTheme();
  const dateToday = new Date()
  dateToday.setDate(dateToday.getDate() -1)
  const startDate = new Date()
  startDate.setDate(startDate.getDate() - 2)
  const [error, setError] = useState("")
  const { timeSeriesData } = useAuth()
  const sleep = "sleep"
  const [efficiencyVal2, setEfficiencyVal2]= useState("")
  const [awakeVal, setAwakeVal]= useState("")
  const [deepVal, setDeepVal]= useState("")
  const [lightVal, setLightVal]= useState("")

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
  const getEfficiency = async () => {
    const response = await timeSeriesData(sleep, formatDate(startDate), formatDate(dateToday))
           console.log(response)
           console.log(response.data[1].summary)
           if (response.status_code === 200 ){
              setEfficiencyVal2(response.data[1].efficiency)
              const awakeValue = ((response.data[1].summary.wake.minutes *1.0/ response.data[1].time_in_bed) * 100).toPrecision(2)
              const deepValue = ((response.data[1].summary.light.minutes *1.0/ response.data[1].time_in_bed) * 100).toPrecision(2)
              const lightValue = ((response.data[1].summary.deep.minutes *1.0/ response.data[1].time_in_bed) * 100).toPrecision(2)
              setAwakeVal(awakeValue)  
              setDeepVal(deepValue)
              setLightVal(lightValue)
           }
  };
  getEfficiency();
}, []);

  const data = {
    datasets: [
      {
        data: [63, 15, 22],
        backgroundColor: ['#3F51B5', '#e53935', '#FB8C00'],
        borderWidth: 8,
        borderColor: '#FFFFFF',
        hoverBorderColor: '#FFFFFF'
      }
    ],
    labels: ['Desktop', 'Tablet', 'Mobile']
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  const devices = [
    {
      title: 'Awake',
      // value: 23,
      value: awakeVal,
      icon: AlarmIcon,
      color: '#3F51B5'
    },
    {
      title: 'Light',
      // value: 15,
      value: lightVal,
      icon: TabletIcon,
      // color: '#E53935'
      color: '#3F51B5'
    },
    {
      title: 'Deep',
      // value: 63,
      value: deepVal,
      icon: NotificationsPausedIcon,
      // color: '#FB8C00'
      color: '#3F51B5'
    }
  ];

  return (
    <Card {...props}>
      <CardHeader title="Sleep Score" />
      <Divider />
      <CardContent>
        {/* <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box> */}
        <ReactEcharts
      option={{
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%',
        },
        series: [
          {
            name: 'Rating',
            type: 'gauge',
            detail: {
              formatter: '{value}'
            },
            data: [
              {
                // value: 75.5,
                value: efficiencyVal2,
                name: 'Sleep Rating'
              }
            ]
          }
        ]
        }}
      />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {devices.map(({
            color,
            icon: Icon,
            title,
            value
          }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: 'center'
              }}
            >
              <Icon color="action" />
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h4"
              >
                {value}
                %
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};