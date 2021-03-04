import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WorkPostsService } from '../work-posts.service'
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-panel-posts',
  templateUrl: './panel-posts.component.html',
  styleUrls: ['./panel-posts.component.css']
})
export class PanelPostsComponent implements OnInit {

  constructor(
    private workPosts: WorkPostsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  form;
  idForEdit;

  ngOnInit(): void {
    this.createForm();
    this.activatedRoute.queryParams.subscribe(params => {
      this.idForEdit = params.my_post;
    });
  }

  addPost(): void {
    this.workPosts.createPost(this.form.value)
                  .subscribe(res=> console.log(res))
  }

  createForm(): void {
    this.form = new FormGroup({
      title: new FormControl(),
      "description" : new FormControl(),
      "price" : new FormControl('25'),
    })
  }

  editPost(): void {
    this.workPosts.putPost(this.idForEdit, this.form.value).subscribe( res => {
      console.log(res);
    });
  }

}
