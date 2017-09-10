import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectComponent } from './select/select.component';
import { OutputComponent } from './output/output.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/select',
    pathMatch: 'full'
  },
  {
    path: 'select',
    children: [],
    component: SelectComponent
  }, 
  {
    path: 'output',
    children: [],
    component: OutputComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
