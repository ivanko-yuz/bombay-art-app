import { Component } from '@angular/core';

@Component({
  selector: 'app-career-selector',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {
  public currentPage: Number = 0;

  showPage(number: Number): void {
    this.currentPage = number;
  }
}
