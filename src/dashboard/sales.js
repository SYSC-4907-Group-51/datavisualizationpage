import { Bar } from 'react-chartjs-2';
import { Box, Button, Card, CardContent, CardHeader, Divider, useTheme } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ReactEcharts from "echarts-for-react";
import { store } from "../App";

export const Sales = (props) => {
  const theme = useTheme();
  const state = store.getState();

  return (
    <Card {...props}>
      <CardHeader
        action={(
          <Button
            endIcon={<ArrowDropDownIcon fontSize="small" />}
            size="small"
          >
            Last 7 days
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
          data: ['2021-10-09', '2021-10-10', '2021-10-11', '2021-10-12', '2021-10-13', '2021-10-14', '2021-10-15', '2021-10-16', '2021-10-17', '2021-10-18', '2021-10-19', '2021-10-20', '2021-10-21', '2021-10-22', '2021-10-23', '2021-10-24', '2021-10-25', '2021-10-26', '2021-10-27', '2021-10-28', '2021-10-29', '2021-10-30', '2021-10-31', '2021-11-01', '2021-11-02', '2021-11-03', '2021-11-04', '2021-11-05', '2021-11-06', '2021-11-07', '2021-11-08', '2021-11-09', '2021-11-10', '2021-11-11', '2021-11-12', '2021-11-13', '2021-11-14', '2021-11-15', '2021-11-16', '2021-11-17', '2021-11-18', '2021-11-19', '2021-11-20', '2021-11-21', '2021-11-22', '2021-11-23', '2021-11-24', '2021-11-25', '2021-11-26' ]
        },
        yAxis: {
          type: 'value', 
          axisLabel: {
            formatter: '{value} bpm'
          },
        },
        series: [
          {
            data: [80, 80, 79, 78, 79, 80, 82, 83, 81, 81, 81, 79, 79, 78, 79, 81, 83, 84, 85, 85, 86, 85, 82, 84, 83, 82, 83, 83, 85, 83, 81, 81, 80, 81, 81, 82, 81, 79, 78, 81, 80, 79, 81, 82, 84, 83, 83, 83, 83],
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
