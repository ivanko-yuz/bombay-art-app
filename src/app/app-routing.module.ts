import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { TeamComponent } from './team/team.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'team-detail/:id', component: TeamDetailComponent },
    { path: 'detail/:id', component: ProjectDetailComponent }  ];

@NgModule({
    imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {

  }
