import { ItemComponent } from './components/posts/item/item.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PostsComponent } from './components/posts/posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'posts', component: PostsComponent,
    // children: [
    //   {path: ':postId'}
    // ]
  },
  {path: 'posts/:postId', component: ItemComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: '', loadChildren: ()=> import('./admin/admin.module').then(mod => mod.AdminModule) },
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
