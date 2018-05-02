import { Component } from '@angular/core';

@Component({
  selector: 'app-nrifaq-selector',
  templateUrl: './nrifaq.component.html',
  styleUrls: ['./nrifaq.component.css']
})
export class NRIFaqComponent {
  public UNCATEGORIZEDTAB: Boolean = false;
  public INCOMETAXTAB: Boolean = false;
  public HOMELOANSTAB: Boolean = false;
  public REPATRIATIONTAB: Boolean = false;
  public GAINSTAXTAB: Boolean = false;
  public TAXINCOMETAB: Boolean = false;
  public DOCUMENTSREQUIREDTAB: Boolean = false;
  public INDICATIVELISTOFDOCUMENTSTAB: Boolean = false;

  showTab(
    number: Number
  ): void {
    console.log(number);
    if (number === 0) {
      this.UNCATEGORIZEDTAB = !this.UNCATEGORIZEDTAB;
    }
    if (number === 1) {
      this.INCOMETAXTAB = !this.INCOMETAXTAB;
    }
    if (number === 2) {
      this.HOMELOANSTAB = !this.HOMELOANSTAB;
    }
    if (number === 3) {
      this.REPATRIATIONTAB = !this.REPATRIATIONTAB;
    }
    if (number === 4) {
      this.GAINSTAXTAB = !this.GAINSTAXTAB;
    }
    if (number === 5) {
      this.TAXINCOMETAB = !this.TAXINCOMETAB;
    }
    if (number === 6) {
      this.DOCUMENTSREQUIREDTAB = !this.DOCUMENTSREQUIREDTAB;
    }
    if (number === 7) {
      this.INDICATIVELISTOFDOCUMENTSTAB = !this.INDICATIVELISTOFDOCUMENTSTAB;
    }
  }
 }
