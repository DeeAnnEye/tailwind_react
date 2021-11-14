import React from "react";
import { Line } from 'react-chartjs-2';

const data = {
    labels: ["A", "B", "C", "D", "E", "F"],
            datasets: [{
                label: "Date",
                backgroundColor: "rgba(247, 163, 58, 0.1)",
                borderColor: '#fd9d24',
                data: [23,45,34,22,30,43],
                lineTension: 0.1,
            }]
};

const options = {
    plugins: {
    legend: {
        display: false
    },
    
    scales: {
        x: {
            grid:{
             display:false,
             lineWidth: 0
                 }
           },
        y: 
           {
         grid:{
          display:false,
          lineWidth: 0
              }
           }
               }
}
};

const LineChart = () => {
 return(
    <div class="w-full p-16">
    <Line data={data} options={options} />
    </div>
 );
}

export default LineChart