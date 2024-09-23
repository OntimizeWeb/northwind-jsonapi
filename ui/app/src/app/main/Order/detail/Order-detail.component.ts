import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { OFormComponent, OntimizeService } from 'ontimize-web-ngx';
import { PieChartConfiguration } from 'ontimize-web-ngx-charts';


@Component({
  selector: 'Order-detail',
  templateUrl: './Order-detail.component.html',
  styleUrls: ['./Order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  protected service: OntimizeService;

  @ViewChild('oDetailForm') form: OFormComponent;

  chartParameters: PieChartConfiguration;

  constructor(protected injector: Injector) {
    this.service = this.injector.get(OntimizeService);
    this.chartParameters = new PieChartConfiguration();
    this.chartParameters.showLeyend = false;
  }

  ngOnInit() {
    this.configureService();
  }

  protected configureService() {
    const conf = this.service.getDefaultServiceConfiguration();
    conf['path'] = '/Order';
    this.service.configureService(conf);
  }
  onDataLoaded(e: object) {
    console.log(JSON.stringify(e));
  }

}
