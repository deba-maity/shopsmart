import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AmazonService {
  private apiUrl = 'https://real-time-amazon-data.p.rapidapi.com/seller-products'; // Endpoint for seller products

  private headers = new HttpHeaders({
    'X-RapidAPI-Key': 'c04f348cf5msha98984f7b94b1ddp1d47a0jsn60a86feaa875', // Replace with your RapidAPI key
    'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com',
  });

  constructor(private http: HttpClient) {}

  // Method to get seller products
  getSellerProducts(sellerId: string, country: string = 'US', page: number = 1, sortBy: string = 'RELEVANCE'): Observable<any> {
    const url = `${this.apiUrl}?seller_id=${sellerId}&country=${country}&page=${page}&sort_by=${sortBy}`;

    return this.http.get<any>(url, { headers: this.headers });
  }
}