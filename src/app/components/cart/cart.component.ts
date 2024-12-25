import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  userId: number | null = null;

  constructor(private cartService: CartService, private http: HttpClient) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    this.userId = userId ? parseInt(userId, 10) : null;

    if (this.userId) {
      this.http
        .get<any[]>(`http://localhost:3000/cart?userId=${this.userId}`)
        .subscribe((data) => (this.cartItems = data));
    }
  }

  placeOrder(): void {
    if (this.cartItems.length === 0) {
      alert('Your cart is empty.');
      return;
    }

    const orders = this.cartItems.map((item) => ({
      userId: this.userId,
      productId: item.productId,
      productName: item.productName,
      source: item.source,
    }));

    this.http.post('http://localhost:3000/orders', orders).subscribe(() => {
      alert('Order placed successfully.');
      this.clearCart();
    });
  }

  clearCart(): void {
    this.cartItems.forEach((item) => {
      this.cartService.removeFromCart(item.id).subscribe(() => {
        this.cartItems = this.cartItems.filter((cartItem) => cartItem.id !== item.id);
      });
    });
  }
}
