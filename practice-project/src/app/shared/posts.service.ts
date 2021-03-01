import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ProductResponce {
  products: any[];
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<ProductResponce>('http://167.99.203.217/api/products');
  }

  getPost(postId) {
    return this.http.get<ProductResponce>(`http://167.99.203.217/api/product/${postId}`);
  }
}
