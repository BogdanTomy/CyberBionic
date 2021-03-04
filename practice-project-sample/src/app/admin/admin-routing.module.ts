import { PanelPostsComponent } from './panel-posts/panel-posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';

const routes: Routes = [
  {path: 'admin', component: AdminAuthComponent},
  {path: 'admin/panel', component: PanelPostsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
