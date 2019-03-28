import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: 'banking.page.html',
  styleUrls: ['banking.page.scss']
})

export class BankingPage {

  constructor(public router: Router) {

  }

  close() {
    this.router.navigateByUrl('home');
  }

}
