import { Component, OnInit } from '@angular/core';
import {Project } from '../classes/project';

@Component({
  selector: 'app-project-selector',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit {
  projects: Project[] = [
  {
    id: 1,
    name: 'Windstorm',
    address: 'address',
    new_project: false,
    img_path: 'test.jpg',
    description: 'desc'
  },
  {
    id: 2,
    name: 'Windstorm',
    address: 'address',
    new_project: false,
    img_path: 'test.jpg',
    description: 'desc'
  },
  {
    id: 3,
    name: 'Windstorm',
    address: 'address',
    new_project: false,
    img_path: 'test.jpg',
    description: 'desc'
  },
  {
    id: 4,
    name: 'Windstorm',
    address: 'address',
    new_project: false,
    img_path: 'test.jpg',
    description: 'desc'
  },
  {
    id: 5,
    name: 'Windstorm',
    address: 'address',
    new_project: false,
    img_path: 'test.jpg',
    description: 'desc'
  }];

  constructor() { }

  ngOnInit() {
  }

}
