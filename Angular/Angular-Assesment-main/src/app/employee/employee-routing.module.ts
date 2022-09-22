import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'employee-form'
  },
  { 
    path: '', 
    component: EmployeeComponent ,

    children:[
      {
         path:'employee-form',
         component:EmployeeFormComponent,
      },
      {
         path:'employee-details',
         component:EmployeeDetailsComponent
      }
    ]
  },
  {
     path:'details/employeename',
     component:EmployeeFormComponent
  },
  {
     path:'employeename',
     component:EmployeeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
