import { Component, OnInit } from '@angular/core';
import { Project } from '../classes/project';

import { AppService } from '../app.service';

@Component({
  selector: 'app-project-selector',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit {
  projects: Project[];

  constructor(private projectService: AppService) { }

  ngOnInit() {
    this.getProjects();
  }
  getProjects(): void {
    this.projectService.getProjects()
    .subscribe(projects => this.projects = projects);
  }
}
