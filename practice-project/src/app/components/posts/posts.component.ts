import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {
  posts;
  constructor(private httpPosts: PostsService) { }

  ngOnInit(): void {
    this.httpPosts.getPosts()
      .subscribe(data => {
        this.posts = data.products;
        console.log(data);
      });
  }

}
