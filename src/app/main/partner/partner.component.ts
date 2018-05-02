import { Component, OnInit } from '@angular/core';
import { Partner } from '../../classes/partner';

import { AppService } from '../../app.service';

@Component({
  selector: 'app-partner-selector',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {
  public partners: Partner[];

  constructor(private partnerService: AppService) { }

  ngOnInit() {
    this.getPartners();
  }


  getPartners(): void {
    this.partnerService.getPartners()
        .subscribe(partners => this.partners = partners);
  }
}
