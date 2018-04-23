import { Component, OnInit } from '@angular/core';
import { Project } from '../../classes/project';

import { AppService } from '../../app.service';

@Component({
  selector: 'app-project-selector',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})

export class ProjectComponent implements OnInit {
  allProjects: Project[];
  projects: Project[];

  constructor(private projectService: AppService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects()
    .subscribe(projects => this.allProjects = projects);
    this.projects = this.allProjects;
  }

  showProjects(value: boolean): void {
    if (value === undefined) {
      this.projects = this.allProjects;
    } else {
      this.projects = this.allProjects.filter(project => project.new_project === value);
    }
  }
}
