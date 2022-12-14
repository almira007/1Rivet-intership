import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../core/guard/auth-guard.guard';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee.component';
import { EmployeeResolver } from './employee.resolver';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'add'
      },
      {
        path: 'add',
        component: EmployeeFormComponent,
      },
      // {
      //   path: 'edit/:id',
      //   component: EmployeeFormComponent,
      // },
      {
        path: 'list',
        component: EmployeeListComponent,
        resolve: { users: EmployeeResolver },
        canActivateChild: [AuthGuardGuard],
        children: [
          {
            path: 'edit/:id',
            component: EmployeeFormComponent,
          }]
      },
      {
        path: 'details/:id',
        component: EmployeeDetailsComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
