import { Component, Input } from '@angular/core';
import { ChartData, ChartType} from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {

  @Input() titulo:string = 'Sin titulo'; 

  @Input('labels') doughnutChartLabels: string[] = [
    'Label1',
    'Label2',
    'Label3',
  ];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100] }
    ],
  };

  public doughnutChartType: ChartType = 'doughnut';

}
