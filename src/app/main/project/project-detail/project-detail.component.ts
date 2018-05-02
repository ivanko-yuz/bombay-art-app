import { Component, OnInit } from '@angular/core';
import { Project } from './../../../classes/project';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AppService } from '../../../app.service';

@Component({
  selector: 'app-project-detail-selector',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})

export class ProjectDetailComponent implements OnInit {

  project: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: AppService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProject();
  }

  getProject(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id)
      .subscribe(project => this.project = project);
  }

  goBack(): void {
    this.location.back();
  }

}
