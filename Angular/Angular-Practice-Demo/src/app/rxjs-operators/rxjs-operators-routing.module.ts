import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombinationJoinOperatorsComponent } from './combination-join-operators/combination-join-operators.component';
import { CreationObservablesComponent } from './creation-observables/creation-observables.component';
import { FilteringOperatorsComponent } from './filtering-operators/filtering-operators.component';
import { RxjsOperatorsComponent } from './rxjs-operators.component';
import { TransformationOperatorsComponent } from './transformation-operators/transformation-operators.component';

const routes: Routes = [
  { 
    path: '', 
    component: RxjsOperatorsComponent,
    children:[
      {
         path:'creation',
         component:CreationObservablesComponent
      },
      {
         path:'combination',
         component:CombinationJoinOperatorsComponent
      },
      {
         path:'filtering',
         component:FilteringOperatorsComponent
      },
      {
         path:'transformation',
         component:TransformationOperatorsComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsOperatorsRoutingModule { }
