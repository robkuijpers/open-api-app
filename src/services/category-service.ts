import { Category } from "./category";

export class CategoryService {

    private categories = new Array();

    constructor() {
        this.categories.push( new Category('Banking'));
        this.categories.push( new Category('Insurance'));
        this.categories.push( new Category('Energy'));
        this.categories.push( new Category('Telecom'));
    }
  
    public getCategories() : Array<Category>[] {

        return this.categories;

    }

  }