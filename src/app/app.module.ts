import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProjectComponent } from './main/project/project.component';
import { ProjectDetailComponent } from './main/project/project-detail/project-detail.component';
import { TeamComponent } from './main/team/team.component';
import { TeamDetailComponent } from './main/team/team-detail/team-detail.component';
import { CareerComponent } from './main/career/career.component';
import { NRIFaqComponent } from './main/nrifaq/nrifaq.component';
import { PartnerComponent } from './main/partner/partner.component';


import {NgxPageScrollModule} from 'ngx-page-scroll';

import { AppService } from './app.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProjectComponent,
    ProjectDetailComponent,
    TeamComponent,
    TeamDetailComponent,
    CareerComponent,
    NRIFaqComponent,
    PartnerComponent
  ],
  imports: [
    BrowserModule,
    NgxPageScrollModule,
    AppRoutingModule
  ],
  providers: [ AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
