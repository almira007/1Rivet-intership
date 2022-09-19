import { NgModule } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/component/about/about.component';
import { PageNotFoundComponent } from './core/component/page-not-found/page-not-found.component';
import { SignUpComponent } from './core/component/sign-up/sign-up.component';
import { FormControlExampleComponent } from './form/form-control-example/form-control-example.component';
import { HomeComponent } from './home/home.component';
import { NgifComponent } from './shared/component/ngif/ngif.component';
import { UserFormComponent } from './user-form/user-form.component';

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
    path:'about',
    component:AboutComponent
  },
  {
    path:'user-form',
    component:UserFormComponent
  },
  {
     path:'signup',
     component:SignUpComponent
  },
  {
    path:'form-control',
    component:FormControlExampleComponent
  },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
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
