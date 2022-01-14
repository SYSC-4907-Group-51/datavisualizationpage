import React from "react";
import { useNavigate } from "react-router-dom";

import  { Component } from "react";
import ReactEcharts from "echarts-for-react";
import Header from './Header';

const colors = ['#5470C6', '#EE6666'];


function ActivitySteps(){
  return (
    <ReactEcharts
      option={{
        title: {
          text: 'Haoyu Activity Steps',
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
            formatter: '{value} Steps'
          },
        },
        series: [
          {
            data: [4168, 12441, 3297, 2801, 5465, 5609, 3907, 3487, 2967, 4988, 3620, 3648, 3635, 7262, 2138, 2177, 3431, 3424, 5990, 5262, 3882, 10322, 4370, 2621, 4715, 2951, 8873, 7002, 3711, 2692, 3106, 5574, 3381, 3430, 3492, 4225, 2738, 2048, 4196, 6041, 2918, 2366, 3848, 7078, 3129, 2387, 3252, 2626, 6399],
            type: 'line'
          }
        ]
        }}
      />
    );
}

function RestingHeartRate(){
  return (
    <ReactEcharts
      option={{
        title: {
          text: 'Haoyu Resting Heart Rate',
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
    );
}


function SleepEfficiency(){
  return (
    <ReactEcharts
      option={{
        title: {
          text: 'Haoyu Sleep Efficiency',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
        dataZoom: [
          {
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            start: 5,
            end: 80
          },
        ],
        xAxis: {
          type: 'category',
          data: ['2021-11-18', '2021-11-19', '2021-11-20', '2021-11-21', '2021-11-22', '2021-11-23', '2021-11-24', '2021-11-25', '2021-11-26' ],
          axisTick: {
            alignWithLabel: true
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Efficiency',
            data: [93, 88, 90, 90, 87, 75, 93, 91, 91],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
        }}
      />
    );
}


function StepGoals(){
  return (
    <ReactEcharts
      option={{
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%',
        },
        series: [
          {
            name: 'Pressure',
            type: 'gauge',
            detail: {
              formatter: '{value}'
            },
            data: [
              {
                value: 92,
                name: 'Sleep Rating'
              }
            ]
          }
        ]
        }}
      />
    );
}

function HeartRate(){
  return(
    <ReactEcharts
      option = {{
        color: colors,
        tooltip: {
        trigger: 'none',
        axisPointer: {
          type: 'cross'
        }
      },
      legend: {},
      grid: {
        top: 70,
        bottom: 50
      },
      xAxis: [
      {
        type: 'category',
        axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: colors[1]
        }
      },
      axisPointer: {
        label: {
          formatter: function (params) {
            return (
              'Heart Rate  ' +
              params.value +
              (params.seriesData.length ? '：' + params.seriesData[0].data : '')
            );
          }
        }
      },
      // prettier-ignore
      data: ['2021-1', '2021-2', '2021-3', '2021-4', '2021-5', '2021-6', '2021-7', '2021-8', '2021-9', '2021-10', '2021-11', '2021-12']
      },
      {
        type: 'category',
        axisTick: {
        alignWithLabel: true
        },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: colors[0]
        }
      },
      axisPointer: {
        label: {
          formatter: function (params) {
            return (
              'Heart Rate  ' +
              params.value +
              (params.seriesData.length ? '：' + params.seriesData[0].data : '')
            );
          }
        }
      },
      // prettier-ignore
      data: ['2020-1', '2020-2', '2020-3', '2020-4', '2020-5', '2020-6', '2020-7', '2020-8', '2020-9', '2020-10', '2020-11', '2020-12']
    }
    ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Heart Rate(2020)',
          type: 'line',
          xAxisIndex: 1,
          smooth: true,
          emphasis: {
            focus: 'series'
          },
          data: [
            68, 71, 70, 94, 81, 88, 91, 85, 82, 87, 75, 95
          ]
        },
      {
          name: 'Heart Rate(2021)',
          type: 'line',
          smooth: true,
          emphasis: {
          focus: 'series'
         },
          data: [
            61, 89, 82, 96, 63, 71, 94, 67, 85, 72, 90, 69
          ]
        }
      ]
    }}
    />
  );
}


const Dashboard = (props) => {
  const navigate = useNavigate();
  return (
    <>
       <div>
        <Header />
        <div>
          <StepGoals />
          <SleepEfficiency />
          <ActivitySteps />
          <RestingHeartRate />
        </div>
      </div>
    </>
  );
};

export default Dashboard;