import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import {AdminRoutingModule} from './admin-routing.module';
import { PanelPostComponent } from './panel-post/panel-post.component';


@NgModule({
  declarations: [AdminAuthComponent, PanelPostComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
