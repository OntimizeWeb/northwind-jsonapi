import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ORDER_MODULE_DECLARATIONS, OrderRoutingModule} from  './Order-routing.module';
import { OChartModule } from 'ontimize-web-ngx-charts';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    OrderRoutingModule,
    OChartModule
  ],
  declarations: ORDER_MODULE_DECLARATIONS,
  exports: ORDER_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrderModule { }
