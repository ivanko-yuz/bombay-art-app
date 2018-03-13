import { Component, OnInit } from '@angular/core';
import { Team } from '../classes/team';

import { AppService } from './../app.service';

@Component({
  selector: 'app-team-selector',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class TeamComponent implements OnInit {

  teammates: Team[];

  constructor(private teamService: AppService) { }

  ngOnInit() {
    this.getTeammates();
  }


  getTeammates(): void {
    this.teamService.getTeammates()
        .subscribe(teammates => this.teammates = teammates);
  }
}
