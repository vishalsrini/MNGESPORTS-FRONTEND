import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchPageRoutingModule } from './match-routing.module';

import { MatchPage } from './match.page';
import { HttpClientModule } from '@angular/common/http';
import { MatchService } from './match.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    MatchPageRoutingModule
  ],
  declarations: [MatchPage],
  providers: [MatchService]
})
export class MatchPageModule {}
