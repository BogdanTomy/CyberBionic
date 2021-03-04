import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { PanelPostsComponent } from './panel-posts/panel-posts.component';

@NgModule({
  declarations: [AdminAuthComponent, PanelPostsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
