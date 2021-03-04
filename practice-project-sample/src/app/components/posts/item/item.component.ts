import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from './../../../shared/posts.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpPosts: PostsService) { }
  
  post 
  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.activatedRoute.params
                        .subscribe(data => {
                          this.request(data.postId)
                        });
    // console.log(this.activatedRoute.snapshot.params)
  }

  request(id){
    this.httpPosts.getPost(id).subscribe(res => {
      console.log(res);
      this.post = res;
    })
  }

}
