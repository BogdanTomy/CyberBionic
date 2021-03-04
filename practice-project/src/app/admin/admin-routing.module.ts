import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminAuthComponent} from './admin-auth/admin-auth.component';
import {PanelPostComponent} from './panel-post/panel-post.component';

const routes: Routes = [
  { path: 'admin', component: AdminAuthComponent },
  { path: 'admin/panel', component: PanelPostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
