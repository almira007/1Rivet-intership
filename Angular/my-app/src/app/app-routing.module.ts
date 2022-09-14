import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescToIncComponent } from './desc-to-inc/desc-to-inc.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'home',
    component:ParentComponent
  },
  {
    path:'ngif',
    component:NgifComponent
  },
  {
    path:'ngfor',
    component:NgforComponent
  },
  {
    path:'ngswitch',
    component:NgswitchComponent
  },
  {
    path:'ngclass',
    component:NgClassComponent
  },
  {
    path:'ngstyle',
    component:NgStyleComponent
  },
  {
    path:'Event-bin',
    component:EventBindingComponent
  },
  {
    path:'dec-inc',
    component:DescToIncComponent
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
