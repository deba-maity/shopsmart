import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  selectedSource = '';
  selectedType = '';

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data.products;
    });
  }

  get filteredProducts() {
    return this.products.filter(
      (product) =>
        (this.selectedSource ? product.source === this.selectedSource : true) &&
        (this.selectedType ? product.type === this.selectedType : true)
    );
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product).subscribe(() => {
      alert(`${product.name} has been added to the cart.`);
    });
  }

  viewDetails(product: any): void {
    console.log('Product Details:', product);
  }
  
}
