import { NgModule } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/component/about/about.component';
import { PageNotFoundComponent } from './core/component/page-not-found/page-not-found.component';
import { SignUpComponent } from './core/component/sign-up/sign-up.component';
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

  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'forms', loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule) },
  { path: 'pipes', loadChildren: () => import('./pipes/pipes.module').then(m => m.PipesModule) },
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
