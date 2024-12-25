import { Component, OnInit } from '@angular/core';
import { AmazonService } from 'src/app/services/amazon.service';

@Component({
  selector: 'app-amazon-products',
  templateUrl: './amazon-products.component.html',
  styleUrls: ['./amazon-products.component.css'],
})
export class AmazonProductsComponent implements OnInit {
  sellerData: any;

  constructor(private amazonDataService: AmazonService) {}

  ngOnInit(): void {
    this.fetchSellerProducts();
  }

  fetchSellerProducts() {
    const sellerId = 'A02211013Q5HP3OMSZC7W'; // Replace with the seller ID you want to query

    this.amazonDataService.getSellerProducts(sellerId).subscribe(
      (data: any) => {
        console.log(data);
        this.sellerData = data;
      },
      (error: any) => {
        console.error('Error fetching seller products:', error);
      }
    );
  }

  amazon(){
    window.location.href = 'https://www.amazon.in/Ganesh-protein-natural-gluten-roasted/dp/B0DJ32ZVYJ/ref=sr_1_5?sr=8-5';
  }
}
