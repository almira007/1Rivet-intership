import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
  { 
    path: '', 
    component: CustomersComponent,
    
    children:[
      {
        path:'cust-list',
        component:CustomerListComponent
      },
      {
        path:'cust-form',
        component:CustomerFormComponent
      }
    ]
  },
  {
    path:'edit/:customerid',
    component:CustomerFormComponent
  },
 {
  path:'add',component:CustomerFormComponent
 },
  {
    path:':customerid',
    component:CustomerListComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
