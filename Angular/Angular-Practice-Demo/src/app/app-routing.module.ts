import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactAsComponent } from './contact-as/contact-as.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
 },
 {
    path:'home',
    component:HomeComponent
 },
  {
    path:'contact-as',
    component:ContactAsComponent
  },
  { path: 'Employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
  { path: 'crud', loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) },
  { path: 'rxjs-operators', loadChildren: () => import('./rxjs-operators/rxjs-operators.module').then(m => m.RxjsOperatorsModule) },
  { path: 'rxjs', loadChildren: () => import('./rxjs/rxjs.module').then(m => m.RxjsModule) },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
