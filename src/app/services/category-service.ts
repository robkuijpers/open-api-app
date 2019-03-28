import { Category } from './category';
import { Product } from './product';


export interface ICategoryService {
    getAll(): Array<Category>[];
}


export class CategoryService implements ICategoryService {

    private categories = new Array();

    constructor() {

        const cat: Category = new Category('Banking', 1);

        cat.products.push(new Product('Rabobank', 1));
        cat.products.push(new Product('Bunq', 2));
        cat.products.push(new Product('ING', 3));
        cat.products.push(new Product('ABN AMRO', 3));
        this.categories.push(cat);

        const cat2: Category = new Category('Insurance', 2)
        cat2.products.push(new Product('Interpolis', 1));
        cat2.products.push(new Product('Achmea', 2));
        this.categories.push(cat2);

        const cat3: Category = new Category('Energy', 3);
        cat3.products.push(new Product('Essent', 1));
        this.categories.push(cat3);

        const cat4: Category = new Category('Telecom', 4);
        cat4.products.push(new Product('KPN', 1));
        cat4.products.push(new Product('Vodafone', 2));
        this.categories.push(cat4);

    }

    public getAll(): Array<Category>[] {
        return this.categories;
    }

  }
