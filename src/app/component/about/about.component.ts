import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';  

import { Chart, ChartOptions, ChartType, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  


  
})


export class AboutComponent implements OnInit {
  @ViewChild('TABLE ', { static: false })
  TABLE!: ElementRef;
  title = 'Excel'; 

  
 
  constructor() {
    const chart2 = document.getElementById("myChart2");
    const data = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };
    // </block:setup>
    
    // <block:plugin:2>
    // Note: changes to the plugin code is not reflected to the chart, because the plugin is loaded at chart construction time and editor changes only trigger an chart.update().
    const plugin = {
      id: 'custom_canvas_background_color',
      beforeDraw: (chart2:any) => {
        const ctx = chart2.canvas.getContext('2d');
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = 'lightGreen';
        ctx.fillRect(0, 0, chart2.width, chart2.height);
        ctx.restore();
      }
    };
    // </block:plugin>
    
    // <block:config:0>
    const config = {
      type: 'doughnut',
      data: data,
      plugins: [plugin],
    };
    // </block:config>
    
    module.exports = {
      actions: [],
      config: config,
    };
   }


  



  public openPDF(): void {
    let DATA: any = document.getElementById('my');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }

    
openExcel(){
  const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this);  
  const wb: XLSX.WorkBook = XLSX.utils.book_new();  
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');  
  XLSX.writeFile(wb, 'ScoreSheet.xlsx');
}

  ngOnInit(): void {
    
    const ctx2 = document.getElementById("myChart2");
    const ctx1 = document.getElementById("myChart1");
    const ctx = document.getElementById("myChart");
    const ctxt = document.getElementById("ChartT");
    const ctxH = document.getElementById("ChartH");
    const ctxJ = document.getElementById("ChartJ");

    const myChart = new Chart("myChart", {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
          label: '# of Votes',
          data: [200, 100, 50],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',

          ],

          hoverOffset: 4
        }]
      },

    });
    const myChart1 = new Chart("myChart1", {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
          label: '# of Votes',
          data: [200, 100, 50],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',

          ],

          hoverOffset: 4
        }]
      },

    });
    const myChart2 = new Chart("myChart2", {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
          label: '# of Votes',
          data: [200, 100, 50],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',

          ],

          hoverOffset: 4
        }]
      },

    });



    const ChartT = new Chart("ChartT", {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 8, 3, 5],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(255, 159, 64, 0.7)',
            'rgba(255, 159, 64, 0.7)'
          ],

          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    const ChartJ = new Chart("ChartJ", {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 8, 3, 5],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(255, 159, 64, 0.7)',
            'rgba(255, 159, 64, 0.7)'
          ],

          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];    const ChartH = new Chart("ChartH", {
      type: 'line',
      data: {
        labels: month.slice(0,7),
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 8, 3, 5],
          fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });



  }

}
