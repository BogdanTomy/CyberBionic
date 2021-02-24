import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TableComponent} from './table/table.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: TableComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
