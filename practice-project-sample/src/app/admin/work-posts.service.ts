import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkPostsService {

  constructor(private http: HttpClient) { }

  createPost(post){
    return this.http.post('http://167.99.203.217/api/product', post, {
      headers: new HttpHeaders({'user-token': '55'})
    })
  }

}
