import { Component, ViewChild, OnInit } from '@angular/core';
import {
  ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels,
  ApexStroke, ApexLegend,
  ApexYAxis, ApexTitleSubtitle, ApexNonAxisChartSeries, ApexResponsive, ApexFill, ApexTooltip
} from "ng-apexcharts";
import { TaskWorkflowService } from '../services/task-workflow.service';





export type ChartOptionsTwo = {
  series: any;
  chart: any;
  responsive: any;
  labels: any;
};

export type ChartOptionsOne = {
  series: any;
  chart: any;
  responsive: any;
  labels: any;
};
export type ChartOptionsThree = {
  series: any;
  chart: any;
  responsive: any;
  labels: any;
};

export type ChartOptions = {
  series: any;
  chart: any;
  xaxis: any;
  stroke: any;
  dataLabels: any;
  yaxis: any;
  title: any;
  labels: any;
  legend: any;
  subtitle: any;
};



export type ChartOptionsBar1 = {
  series: any;
  chart: any;
  xaxis: any;
  yaxis: any | any;
  title: any;
  labels: any;
  stroke: any;
  dataLabels: any;
  fill: any;
  tooltip: any;
};
export type ChartOptionsBar2 = {
  series: any;
  chart: any;
  xaxis: any;
  yaxis: any | any;
  title: any;
  labels: any;
  stroke: any;
  dataLabels: any;
  fill: any;
  tooltip: any;
};


export const series = {
  monthDataSeries1: {
    prices: [
      8107.85,
      8128.0,
      8122.9,
      8165.5,
      8340.7,
      8423.7,
      8423.5,
      8514.3,
      8481.85,
      8487.7,
      8506.9,
      8626.2,
      8668.95,
      8602.3,
      8607.55,
      8512.9,
      8496.25,
      8600.65,
      8881.1,
      9340.85
    ],
    dates: [
      "13 Nov 2017",
      "14 Nov 2017",
      "15 Nov 2017",
      "16 Nov 2017",
      "17 Nov 2017",
      "20 Nov 2017",
      "21 Nov 2017",
      "22 Nov 2017",
      "23 Nov 2017",
      "24 Nov 2017",
      "27 Nov 2017",
      "28 Nov 2017",
      "29 Nov 2017",
      "30 Nov 2017",
      "01 Dec 2017",
      "04 Dec 2017",
      "05 Dec 2017",
      "06 Dec 2017",
      "07 Dec 2017",
      "08 Dec 2017"
    ]
  },

};





@Component({
  selector: 'app-chart-cm',
  templateUrl: './chart-cm.component.html',
  styleUrls: ['./chart-cm.component.css']


})





export class ChartCmComponent implements OnInit {



btnOneBoolean:boolean = false
btnTwoBoolean:boolean = false
btnThreeBoolean:boolean = false






  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions>;
  @ViewChild("chart2") chartTwo: ChartComponent | undefined;
  public chartOptionsTwo: Partial<ChartOptionsTwo>;
  @ViewChild("chart1") chartOne: ChartComponent | undefined;
  public chartOptionsOne: Partial<ChartOptionsOne>;
  @ViewChild("chart3") chartThree: ChartComponent | undefined;
  public chartOptionsThree: Partial<ChartOptionsThree>;
  @ViewChild("chartBar1") chartBar1: ChartComponent | undefined;
  public chartOptionsBar1: Partial<ChartOptionsBar1>;
  @ViewChild("chartBar2") chartBar2: ChartComponent | undefined;
  public chartOptionsBar2: Partial<ChartOptionsBar2>;

 

  btnActive = 'test'
  btnActive2 = 'active'
  btnActive3 = 'active'
  wait = 'wait'
  wait2 = 'wait'
  message = "Waiting"
  completed = false;
  completed1 = false;
  btnOneTest:any
  btnTwoTest = this.taskWorkflow.workFlow.workFlowTaskOne
  btnThreeTest:any
  btnFourBoolean: boolean = false
  
  
  btnEvent() {
    this.taskWorkflow.pushTaskOne(2)
    console.log(this.btnTwoTest);
    this.btnTwoBoolean = true
    this.btnOneBoolean = false
    }

btnEventTwo(){
  this.taskWorkflow.pushTaskTwo(3)
  this.taskWorkflow.pushTaskOne(0)
    this.btnThreeBoolean = true
    this.btnTwoBoolean = false
}
btnEventThree(){
  this.taskWorkflow.pushTaskThree(4)
  this.taskWorkflow.pushTaskTwo(0)
  this.btnFourBoolean = true
    this.btnThreeBoolean = false
}



  constructor(private taskWorkflow:TaskWorkflowService) {
    // checks //
    console.log(this.btnTwoTest);
    
    if(localStorage.getItem('pushTaskOne') == `2`){
        this.btnTwoBoolean = true
        console.log('done');
        console.log(this.btnTwoTest);
    }else{
      this.btnTwoBoolean = false
      console.log('no');
      
    }

    console.log(this.taskWorkflow.getTaskOne());
    

    //end check //

    this.chartOptions = {
      series: [
        {
          name: "STOCK ABC",
          data: series.monthDataSeries1.prices
        }
      ],
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },

      title: {
        text: "Fundamental Analysis of Stocks",
        align: "left"
      },
      subtitle: {
        text: "Price Movements",
        align: "left"
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: "left"
      }
    };

    this.chartOptionsTwo = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 350,
        type: "pie"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.chartOptionsOne = {
      series: [20, 20, 20, 20, 20],
      chart: {
        width: 350,
        type: "pie"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.chartOptionsThree = {
      series: [44, 55, 70, 43, 22],
      chart: {
        width: 350,
        type: "pie"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };








    this.chartOptionsBar1 = {
      series: [
        {
          name: "Website Blog",
          type: "column",
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        },
        {
          name: "Social Media",
          type: "line",
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      stroke: {
        width: [0, 4]
      },
      title: {
        text: "Traffic Sources"
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      labels: [
        "01 Jan 2001",
        "02 Jan 2001",
        "03 Jan 2001",
        "04 Jan 2001",
        "05 Jan 2001",
        "06 Jan 2001",
        "07 Jan 2001",
        "08 Jan 2001",
        "09 Jan 2001",
        "10 Jan 2001",
        "11 Jan 2001",
        "12 Jan 2001"
      ],
      xaxis: {
        type: "datetime"
      },
      yaxis: [
        {
          title: {
            text: "Website Blog"
          }
        },
        {
          opposite: true,
          title: {
            text: "Social Media"
          }
        }
      ]
    };
    this.chartOptionsBar2 = {
      series: [
        {
          name: "Website Blog",
          type: "column",
          data: [440, 505, 560, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        },
        {
          name: "Social Media",
          type: "line",
          data: [23, 42, 35, 33, 43, 22, 17, 31, 22, 22, 12, 16]
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      stroke: {
        width: [0, 4]
      },
      title: {
        text: "Traffic Sources"
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      labels: [
        "01 Jan 2001",
        "02 Jan 2001",
        "03 Jan 2001",
        "04 Jan 2001",
        "05 Jan 2001",
        "06 Jan 2001",
        "07 Jan 2001",
        "08 Jan 2001",
        "09 Jan 2001",
        "10 Jan 2001",
        "11 Jan 2001",
        "12 Jan 2001"
      ],
      xaxis: {
        type: "datetime"
      },
      yaxis: [
        {
          title: {
            text: "Website Blog"
          }
        },
        {
          opposite: true,
          title: {
            text: "Social Media"
          }
        }
      ]
    };






  }



  ngOnInit(): void {

  }





}






