import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalsComponent } from './animals/animals.component';
import { DetailComponent } from './detail/detail.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  {
    path: '',
    component: AnimalsComponent,
    children: [
      {
        path: 'form',
        children: [
          {
            path: '',
            component: FormComponent
          },
          {
            path: ':id',
            component: FormComponent
          }
        ]       
      },
      {
        path: ':id',
        component: DetailComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalRoutingModule { }
