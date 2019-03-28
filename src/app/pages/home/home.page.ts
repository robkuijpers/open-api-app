import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: [ 'home.page.scss' ],
  providers: [ CategoryService ]
})
export class HomePage implements OnInit {

  private categories;

  constructor(public router: Router, public categoryService: CategoryService) {

  }

  details(event: Event): void {
      this.router.navigateByUrl('banking');
  }

  ngOnInit(): void {
    this.categories = this.categoryService.getAll();
  }

}
