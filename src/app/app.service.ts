import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { PROJECTS } from './mock-projects';
import { Project } from './classes/project';

import { TEAMMATES } from './mock-team';
import { Team } from './classes/team';

import { PARTNERS } from './mock-partners';
import { Partner } from './classes/partner';

@Injectable()
export class AppService {

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }

  getTeammates(): Observable<Team[]> {
    return of(TEAMMATES);
  }

  getPartners(): Observable<Partner[]> {
    return of(PARTNERS);
  }

  getProject(id: number): Observable<Project> {
    return of(PROJECTS.find(item => item.id === id));
  }

  getTemmate(id: number): Observable<Team> {
    return of(TEAMMATES.find(item => item.id === id));
  }
}
