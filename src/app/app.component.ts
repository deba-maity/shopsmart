import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ShopSmart';
  selectedSource: string = '';
  selectedType: string = '';
  showProfileMenu: boolean = false;
  products: any[] = [];

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data.products;
    });
  }
  
  toggleProfileMenu(): void {
    this.showProfileMenu = !this.showProfileMenu;
  }

  get filteredProducts() {
    return this.products.filter(
      (product) =>
        (this.selectedSource ? product.source === this.selectedSource : true) &&
        (this.selectedType ? product.type === this.selectedType : true)
    );
  }

  logout(): void {
    localStorage.removeItem('userId');
    localStorage.removeItem('password');
    alert('You have logged out.');
    window.location.reload();
  }

  amazon(){
    window.location.href = 'https://www.amazon.in/Ganesh-protein-natural-gluten-roasted/dp/B0DJ32ZVYJ/ref=sr_1_5?sr=8-5';
  }
}
