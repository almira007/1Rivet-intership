import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './rxjs.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservalComponent } from './observal/observal.component';
import { ObservalListComponent } from './observal/observal-list/observal-list.component';
import { ObservalExampleComponent } from './observal/observal-list/observal-example/observal-example.component';
import { EmployeeDataService } from '../service/employee-data.service';
import { SubjectComponent } from './observal/observal-list/subject/subject.component';
import { BehaviorSubjectComponent } from './observal/observal-list/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './observal/observal-list/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './observal/observal-list/async-subject/async-subject.component';


@NgModule({
  declarations: [
    RxjsComponent,
    PromiseComponent,
    ObservalComponent,
    ObservalListComponent,
    ObservalExampleComponent,
    SubjectComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ],
  providers:[EmployeeDataService]
})
export class RxjsModule { }
