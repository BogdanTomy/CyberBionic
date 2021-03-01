import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PostsComponent} from './components/posts/posts.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ItemComponent} from './components/posts/item/item.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:postId', component: ItemComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
