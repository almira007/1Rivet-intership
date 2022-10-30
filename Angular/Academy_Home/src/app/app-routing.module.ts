import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './core/autentication/login/login.component';
import { RegistrationComponent } from './core/autentication/registration/registration.component';
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
     path:'about',
     component:AboutusComponent
  },
  {
     path:'contact',
     component:ContactComponent
  },
  {
     path:'login',
     component:LoginComponent
  },
  {
     path:'registration',
     component:RegistrationComponent
  },
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
