import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';

import { WebManagementModule } from '../web-management-module'
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    WebManagementModule,
    NgApexchartsModule
  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule { }