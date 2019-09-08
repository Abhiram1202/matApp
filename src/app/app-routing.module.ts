import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTableComponent } from './my-table/my-table.component';

const routes: Routes = [{ path:'mytable', component: MyTableComponent}, ];

@ NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
