import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private httpPosts: PostsService) { }
  posts
  ngOnInit(): void {
    this.httpPosts.getPosts()
        .subscribe(data => {
          this.posts = data.products;
          console.log(data); 
        });
  }

}
