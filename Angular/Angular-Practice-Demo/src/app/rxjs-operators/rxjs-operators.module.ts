import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsOperatorsRoutingModule } from './rxjs-operators-routing.module';
import { RxjsOperatorsComponent } from './rxjs-operators.component';
import { CreationObservablesComponent } from './creation-observables/creation-observables.component';
import { CombinationJoinOperatorsComponent } from './combination-join-operators/combination-join-operators.component';
import { FilteringOperatorsComponent } from './filtering-operators/filtering-operators.component';
import { TransformationOperatorsComponent } from './transformation-operators/transformation-operators.component';


@NgModule({
  declarations: [
    RxjsOperatorsComponent,
    CreationObservablesComponent,
    CombinationJoinOperatorsComponent,
    FilteringOperatorsComponent,
    TransformationOperatorsComponent
  ],
  imports: [
    CommonModule,
    RxjsOperatorsRoutingModule
  ]
})
export class RxjsOperatorsModule { }
