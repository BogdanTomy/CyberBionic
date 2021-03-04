import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WorkPostsService } from '../work-posts.service'

@Component({
  selector: 'app-panel-posts',
  templateUrl: './panel-posts.component.html',
  styleUrls: ['./panel-posts.component.css']
})
export class PanelPostsComponent implements OnInit {

  constructor(private workPosts: WorkPostsService) { }
  form
  ngOnInit(): void {
    this.createForm();
  }

  addPost(){
    this.workPosts.createPost(this.form.value)
                  .subscribe(res=> console.log(res))
  }

  createForm(){
    this.form = new FormGroup({
      title: new FormControl(),
      "description" : new FormControl(),
      "price" : new FormControl('25'),
    })
  }

}
