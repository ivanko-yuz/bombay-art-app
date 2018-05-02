import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProjectComponent } from './main/project/project.component';
import { ProjectDetailComponent } from './main/project/project-detail/project-detail.component';
import { TeamComponent } from './main/team/team.component';
import { TeamDetailComponent } from './main/team/team-detail/team-detail.component';
import { NRIFaqComponent } from './main/nrifaq/nrifaq.component';

const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'team-detail/:id', component: TeamDetailComponent },
    { path: 'detail/:id', component: ProjectDetailComponent },
    { path: 'nri-faq', component: NRIFaqComponent } ];

@NgModule({
    imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {

  }
