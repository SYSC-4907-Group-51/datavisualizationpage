import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from '../severity-pill';
import ReactEcharts from "echarts-for-react";
import { store } from "../App";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState} from 'react';
import Dashboard from '../components/Dashboard';

const orders = [
  {
    id: uuid(),
    ref: 'CDD1049',
    amount: 30.5,
    customer: {
      name: 'Ekaterina Tankova'
    },
    createdAt: 1555016400000,
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'CDD1048',
    amount: 25.1,
    customer: {
      name: 'Cao Yu'
    },
    createdAt: 1555016400000,
    status: 'delivered'
  },
  {
    id: uuid(),
    ref: 'CDD1047',
    amount: 10.99,
    customer: {
      name: 'Alexa Richardson'
    },
    createdAt: 1554930000000,
    status: 'refunded'
  },
  {
    id: uuid(),
    ref: 'CDD1046',
    amount: 96.43,
    customer: {
      name: 'Anje Keizer'
    },
    createdAt: 1554757200000,
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'CDD1045',
    amount: 32.54,
    customer: {
      name: 'Clarke Gillebert'
    },
    createdAt: 1554670800000,
    status: 'delivered'
  },
  {
    id: uuid(),
    ref: 'CDD1044',
    amount: 16.76,
    customer: {
      name: 'Adam Denisov'
    },
    createdAt: 1554670800000,
    status: 'delivered'
  }
];

export const StepsTimeSeries = (props) =>{
  const state = store.getState();
  const [dateArray, setDateArray] = useState([]);
  const [activityStepArray, setActivityStepArray] = useState([]);
  const { timeSeriesData } = useAuth()
  const steps = "step"
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
      const getActivitySteps = async () => {
        const response = await timeSeriesData(steps, "2022-01-01", formatDate(dateToday))
        console.log(response)
        if(response.status_code === 203){
          <Dashboard stepsVal2 = {false}/>
        }
        setDateArray([])
        setActivityStepArray([])
        for (var i = 0; i < response.data.length; i++) {
          var stepsVal = response.data[i].steps;
          var dateVal = response.data[i].date;
          setDateArray(dateArray => [...dateArray, dateVal]);
          setActivityStepArray(activityStepArray => [...activityStepArray, stepsVal]);
        //   // heartRateArray.push(heartrateVal)
        //   // dateArray.push(dateVal)
        //   // console.log(heartrateVal.resting_heartrate);
        }
        <Dashboard stepsVal2 = {true}/>
        // console.log(dateArray)
        // console.log(heartRateArray)
      };
      getActivitySteps();
    }, []);

    async function lastYearActivity(e) {
      e.preventDefault()
    
      try {
          setError("")
          const response = await timeSeriesData(steps, "2021-01-01", "2021-12-30")
          console.log(response)
          setDateArray([])
          setActivityStepArray([])
          for (var i = 0; i < response.data.length; i++) {
            var stepsVal = response.data[i].steps;
            var dateVal = response.data[i].date;
            setDateArray(dateArray => [...dateArray, dateVal]);
            setActivityStepArray(activityStepArray => [...activityStepArray, stepsVal]);
          //   // heartRateArray.push(heartrateVal)
          //   // dateArray.push(dateVal)
          //   // console.log(heartrateVal.resting_heartrate);
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
      <div>
          <Button
            endIcon={<ArrowDropDownIcon fontSize="small" />}
            size="small"
          >
            Year
          </Button>
          <div>
              <Button onClick = {lastYearActivity} size = "small">2021</Button>
          </div>
          </div>
    )} 
    title="Activity Steps" />
    <CardContent>
    <ReactEcharts
      option={{
        title: {
          text: `${state.storeAccess[0].data.username} Activity Steps`,
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
            start: 98,
            end: 100
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
          data: dateArray
          // data: ['2021-10-09', '2021-10-10', '2021-10-11', '2021-10-12', '2021-10-13', '2021-10-14', '2021-10-15', '2021-10-16', '2021-10-17', '2021-10-18', '2021-10-19', '2021-10-20', '2021-10-21', '2021-10-22', '2021-10-23', '2021-10-24', '2021-10-25', '2021-10-26', '2021-10-27', '2021-10-28', '2021-10-29', '2021-10-30', '2021-10-31', '2021-11-01', '2021-11-02', '2021-11-03', '2021-11-04', '2021-11-05', '2021-11-06', '2021-11-07', '2021-11-08', '2021-11-09', '2021-11-10', '2021-11-11', '2021-11-12', '2021-11-13', '2021-11-14', '2021-11-15', '2021-11-16', '2021-11-17', '2021-11-18', '2021-11-19', '2021-11-20', '2021-11-21', '2021-11-22', '2021-11-23', '2021-11-24', '2021-11-25', '2021-11-26' ]
        },
        yAxis: {
          type: 'value', 
          axisLabel: {
            formatter: '{value} Steps'
          },
        },
        series: [
          {
            data: activityStepArray,
            // data: [4168, 12441, 3297, 2801, 5465, 5609, 3907, 3487, 2967, 4988, 3620, 3648, 3635, 7262, 2138, 2177, 3431, 3424, 5990, 5262, 3882, 10322, 4370, 2621, 4715, 2951, 8873, 7002, 3711, 2692, 3106, 5574, 3381, 3430, 3492, 4225, 2738, 2048, 4196, 6041, 2918, 2366, 3848, 7078, 3129, 2387, 3252, 2626, 6399],
            type: 'line'
          }
        ]
        }}
      />
    </CardContent>
    {/* <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Order Ref
              </TableCell>
              <TableCell>
                Customer
              </TableCell>
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    Date
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                hover
                key={order.id}
              >
                <TableCell>
                  {order.ref}
                </TableCell>
                <TableCell>
                  {order.customer.name}
                </TableCell>
                <TableCell>
                  {format(order.createdAt, 'dd/MM/yyyy')}
                </TableCell>
                <TableCell>
                  <SeverityPill
                    color={(order.status === 'delivered' && 'success')
                    || (order.status === 'refunded' && 'error')
                    || 'warning'}
                  >
                    {order.status}
                  </SeverityPill>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar> */}
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      {/* <Button
        color="primary"
        endIcon={<ArrowRightIcon fontSize="small" />}
        size="small"
        variant="text"
      >
        View all
      </Button> */}
    </Box>
  </Card>
  );
}; 