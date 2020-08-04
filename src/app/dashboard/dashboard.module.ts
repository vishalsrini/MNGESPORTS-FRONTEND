import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { IonicModule } from '@ionic/angular';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
 
import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { SliderComponent } from './slider/slider.component';
import { DashboardService } from './dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    DashboardPageRoutingModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  declarations: [DashboardPage, SliderComponent],
  providers: [DashboardService]
})
export class DashboardPageModule {}
