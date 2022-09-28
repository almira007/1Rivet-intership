import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactAsComponent } from './contact-as/contact-as.component';
import { HomeComponent } from './home/home.component';
import { ObservablesExampleComponent } from './observables-example/observables-example.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SubjectExampleComponent } from './subject-example/subject-example.component';

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
  {
     path:'observable',
     component:ObservablesExampleComponent
  },
  {
     path:'subject',
     component:SubjectExampleComponent
  },
  { path: 'Employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
  { path: 'crud', loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) },
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
