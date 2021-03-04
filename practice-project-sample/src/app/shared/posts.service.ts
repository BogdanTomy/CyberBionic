import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ProductResponse {
  products: any[];
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get<ProductResponse>('http://167.99.203.217/api/products')
  }
  getPost(idPost){
    return this.http.get<ProductResponse>('http://167.99.203.217/api/product/' + idPost)
  }
}
