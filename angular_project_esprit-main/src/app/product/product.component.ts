import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: any[] = [
    { id: 1, name: "iPhone", price: 3000, quantity: 5 },
    { id: 2, name: "Samsung", price: 2500, quantity: 10 },
    { id: 3, name: "Nokia", price: 1500, quantity: 15 },
    { id: 4, name: "Xiaomi", price: 2000, quantity: 20 }
  ];

  // Calculer la quantité totale
  getTotalQuantity(): number {
    return this.products.reduce((total, product) => total + product.quantity, 0);
  }

  // Calculer la valeur totale du stock
  getTotalValue(): number {
    return this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

  // Calculer le prix moyen
  getAveragePrice(): number {
    const total = this.products.reduce((sum, product) => sum + product.price, 0);
    return Math.round(total / this.products.length);
  }


  add(product: any){
    product.quantity--;
  }
    supp(product: any){
    product.quantity++;
  }
}