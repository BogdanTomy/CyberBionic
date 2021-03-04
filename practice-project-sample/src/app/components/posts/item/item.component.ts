import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from './../../../shared/posts.service';
import { WorkPostsService } from '../../../admin/work-posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpPosts: PostsService,
    private workPosts: WorkPostsService,
    private router: Router
  ) { }

  post;
  show = false;

  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.activatedRoute.params
                        .subscribe(data => {
                          this.request(data.postId);
                        });
    // console.log(this.activatedRoute.snapshot.params)
  }

  request(id){
    this.httpPosts.getPost(id).subscribe(res => {
      console.log(res);
      this.post = res;
      this.check()
;    });
  }

  editPost(): void {
    this.router.navigate(['admin', 'panel'], { queryParams: { my_post: this.post.id } }) ;
  }

  deletePost() {
    this.workPosts.deletePost(this.post.id)
      .subscribe( res => {
        console.log(res);
        this.router.navigateByUrl('posts');
      })
  }

  check(): void {
    +localStorage.getItem('token-key') == this.post.autor.id ? this.show = true : this.show = false;
  }

}
