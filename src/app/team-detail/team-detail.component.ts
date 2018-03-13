import { Component, OnInit } from '@angular/core';
import { Team } from './../classes/team';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AppService } from '../app.service';

@Component({
  selector: 'app-team-detail-selector',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})

export class TeamDetailComponent implements OnInit {

member: Team;

constructor(
  private route: ActivatedRoute,
  private teamSErvice: AppService,
  private location: Location
) { }

  ngOnInit() {
    this.getMember();
  }

  getMember(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.teamSErvice.getTemmate(id)
    .subscribe(member => this.member = member);
  }

  goBack(): void {
    this.location.back();
  }

}
