import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CategoryService } from "../../services/category-service";
import { ProductService } from "../../services/product-service";

import { Category } from "../../services/category";
import { Product } from "../../services/product";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public categoriesService: CategoryService) {

  }

}
