import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private products: any = [
    {
      id: 1,
      name: "egg",
      category: "food",
      description: "lorem egg",
      price: 1
    },
    {
      id: 2,
      name: "Coca cola",
      category: "drintk",
      description: "lorem Drink",
      price: 1
    }
  ]

  getAllProducts() {
    return this.products;
  }

  getProductById(id: number) {

    return this.products.filter((product: { id: number; }) => product.id === id)
  }


}
