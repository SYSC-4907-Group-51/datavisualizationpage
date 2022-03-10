import { Bar } from 'react-chartjs-2';
import { useEffect, useState} from 'react';
import { Box, Button, Card, CardContent, CardHeader, Divider, useTheme } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ReactEcharts from "echarts-for-react";
import { store } from "../App";
import { useAuth } from "../contexts/AuthContext";



export const Sales = (props) => {
  const theme = useTheme();
  const state = store.getState();
  const [dateArray, setDateArray] = useState([]);
  const [heartRateArray, setHeartRateArray] = useState([]);
  const { timeSeriesData } = useAuth()
  const heartrate = "heartrate"
  const dateToday = new Date()
  dateToday.setDate(dateToday.getDate() -1)
  const [error, setError] = useState("")

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
      const getData2 = async () => {
        const response = await timeSeriesData(heartrate, "2022-01-01", formatDate(dateToday))
        console.log(response)
        for (var i = 0; i < response.data.length; i++) {
          var heartrateVal = response.data[i].resting_heartrate;
          var dateVal = response.data[i].date;
          setDateArray(dateArray => [...dateArray, dateVal]);
          setHeartRateArray(heartRateArray => [...heartRateArray, heartrateVal]);
          // heartRateArray.push(heartrateVal)
          // dateArray.push(dateVal)
          // console.log(heartrateVal.resting_heartrate);
        }
        // console.log(dateArray)
        // console.log(heartRateArray)
      };
      getData2();
    }, []);


  async function getData(e) {
    e.preventDefault()
  
    try {
        setError("")
        const response = await timeSeriesData(heartrate, "2022-01-01", formatDate(dateToday))
        console.log(response)
        for (var i = 0; i < response.data.length; i++) {
          var heartrateVal = response.data[i].resting_heartrate;
          var dateVal = response.data[i].date;
          heartRateArray.push(heartrateVal)
          dateArray.push(dateVal)
          // console.log(heartrateVal.resting_heartrate);
        }
        // console.log(dataArray)
        // console.log(dateArray)
    }
    catch {
        setError("Can't get steps")
    }
  
  }

  return (
    <Card {...props}>
      <CardHeader
        action={(
          <Button
            endIcon={<ArrowDropDownIcon fontSize="small" />}
            size="small"
          >
            Year
          </Button>
        )}
        title="Resting Heart Rate"
      />
      <Divider />
      <CardContent>
        {/* <Box
          sx={{
            height: 400,
            position: 'relative'
          }}
        >
          <Bar
            data={data}
            options={options}
          />
        </Box> */}
        <ReactEcharts
      option={{
        title: {
          text: `${state.storeAccess[0].data.username} Resting Heart Rate`,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        dataZoom: [
          {
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            start: 1,
            end: 12
          },
        ],
        toolbox: {
          show: true,
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          // data: ['2021-10-09', '2021-10-10', '2021-10-11', '2021-10-12', '2021-10-13', '2021-10-14', '2021-10-15', '2021-10-16', '2021-10-17', '2021-10-18', '2021-10-19', '2021-10-20', '2021-10-21', '2021-10-22', '2021-10-23', '2021-10-24', '2021-10-25', '2021-10-26', '2021-10-27', '2021-10-28', '2021-10-29', '2021-10-30', '2021-10-31', '2021-11-01', '2021-11-02', '2021-11-03', '2021-11-04', '2021-11-05', '2021-11-06', '2021-11-07', '2021-11-08', '2021-11-09', '2021-11-10', '2021-11-11', '2021-11-12', '2021-11-13', '2021-11-14', '2021-11-15', '2021-11-16', '2021-11-17', '2021-11-18', '2021-11-19', '2021-11-20', '2021-11-21', '2021-11-22', '2021-11-23', '2021-11-24', '2021-11-25', '2021-11-26' ]
          data: dateArray
        },
        yAxis: {
          type: 'value', 
          axisLabel: {
            formatter: '{value} bpm'
          },
        },
        series: [
          {
            data: heartRateArray,
            // data: [80, 80, 79, 78, 79, 80, 82, 83, 81, 81, 81, 79, 79, 78, 79, 81, 83, 84, 85, 85, 86, 85, 82, 84, 83, 82, 83, 83, 85, 83, 81, 81, 80, 81, 81, 82, 81, 79, 78, 81, 80, 79, 81, 82, 84, 83, 83, 83, 83],
            type: 'line'
          }
        ]
        }}
      />
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon fontSize="small" />}
          size="small"
        >
          More Health Metrics
        </Button>
      </Box>
    </Card>
  );
};
