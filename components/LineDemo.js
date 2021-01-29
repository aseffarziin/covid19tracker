import React from "react";
import { Line } from "react-chartjs-2";
import styles from '../styles/line/linedemo.module.scss'
const data = {
  labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
  datasets: [
    {
      label: "",
      fill: false,
      lineTension: 0.4,
      borderColor: "#3751FF",
      pointBorderColor: "#3751FF",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBorderColor: "#3751FF",
      pointHoverBorderWidth: 1,
      pointRadius: 0,  //#DFE0EB
      pointHitRadius: 0,
      data: [12,20,25,30,28,31,38,44,50,42,30,18,19,25,30,39,48,44,40,37]
    },
    {
      label: "",
      fill: false,
      lineTension: 0.4,
      borderColor: "#DFE0EB",
      pointBorderColor: "#DFE0EB",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBorderColor: "#DFE0EB",
      pointHoverBorderWidth: 1,
      pointRadius: 0,
      pointHitRadius: 0,
      data: [34,32,30,27,24,27,30,29,31,30,34,28,20,14,26,35,42,29,31,35]
    }
  ]
};

const options = {
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "rgba(0, 0, 0, 0)"
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          min:10,
          max: 60,
          stepSize: 10
        },
        gridLines: {
          color: "#EBEDF0"
        }
      }
    ]
  }
};

const LineDemo = () => {
    return (
      <div className={styles.main}>
        <h1 className={styles.header}>Total Covid 19 Graph</h1> <br />
        <Line data={data} options={options} width={1900} height={500} />
      </div>
    );
}

export default LineDemo