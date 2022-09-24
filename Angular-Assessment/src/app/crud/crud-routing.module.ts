import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudDetailsComponent } from './crud-details/crud-details.component';
import { CrudFormComponent } from './crud-form/crud-form.component';
import { CrudListComponent } from './crud-list/crud-list.component';
import { CrudComponent } from './crud.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'crud-form'
  },
  { 
    path: '', 
    component: CrudComponent ,
    children:[
      {
         path:'crud-form',
         component:CrudFormComponent
      },
      {
         path:'crud-details',
         component:CrudDetailsComponent
      },
      {
        path: 'edit/:id',
        component: CrudFormComponent
      },
    ]
  }
  ,
  {
     path:'details/employeename',
     component:CrudFormComponent
  },
  {
     path:'employeename',
     component:CrudListComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
