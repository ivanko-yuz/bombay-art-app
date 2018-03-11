import { Component, OnInit } from '@angular/core';
import { Project } from './../classes/project';

@Component({
  selector: 'app-project-detail-selector',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})

export class ProjectDetailComponent implements OnInit {

  project: Project =
    {
      id: 1,
      name: 'Windstorm',
      address: 'address',
      new_project: false,
      img_path: 'path',
      description: 'desc'
    };

constructor() { }

  ngOnInit() {
  }

}
