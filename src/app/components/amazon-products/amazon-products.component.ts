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

  satoo(){
    window.location.href = 'https://www.amazon.in/Ganesh-protein-natural-gluten-roasted/dp/B0DJ32ZVYJ/ref=sr_1_5?sr=8-5';
  }
  lotee(){
    window.location.href = 'https://www.amazon.in/Lotte-Choco-Pie-Pack-336g/dp/B0152RPOTC/ref=sr_1_5_mod_primary_new?nsdOptOutParam=true&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=8-5'
  }
  muri(){
    window.location.href = 'https://www.amazon.in/Organic-Tattva-100-Puffed-Rice/dp/B0DGXZM44L/ref=sr_1_1_f3_0o_fs_sspa?nsdOptOutParam=true&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'
  }
}
