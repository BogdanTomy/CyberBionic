import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../../shared/posts.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpPosts: PostsService
  ) { }

    post;

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(data => {
        this.request(data.postId);
      });
  }

  request(id): void {
    this.httpPosts.getPost(id)
      .subscribe(resp => {
        this.post = resp;
      });
  }

}
