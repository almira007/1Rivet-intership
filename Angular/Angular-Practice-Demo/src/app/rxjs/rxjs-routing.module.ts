import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncSubjectComponent } from './observal/observal-list/async-subject/async-subject.component';
import { BehaviorSubjectComponent } from './observal/observal-list/behavior-subject/behavior-subject.component';
import { ObservalExampleComponent } from './observal/observal-list/observal-example/observal-example.component';
import { ObservalListComponent } from './observal/observal-list/observal-list.component';
import { ReplaySubjectComponent } from './observal/observal-list/replay-subject/replay-subject.component';
import { SubjectComponent } from './observal/observal-list/subject/subject.component';
import { ObservalComponent } from './observal/observal.component';
import { PromiseComponent } from './promise/promise.component';
import { RxjsComponent } from './rxjs.component';

const routes: Routes = [
  {
     path: '', 
     component: RxjsComponent,
     children:[
      {
          path:'Promise',
          component:PromiseComponent
      },
      {
          path:'observal',
          component:ObservalComponent,
          children:[
            {
               path:'',
               component:ObservalListComponent
            },
            {
               path:'observal-practical',
               component:ObservalExampleComponent
            },
            {
               path:'subject',
               component:SubjectComponent
            },
            {
               path:'behavior',
               component:BehaviorSubjectComponent
            },
            {
               path:'replay',
               component:ReplaySubjectComponent
            },
            {
               path:'async',
               component:AsyncSubjectComponent
            }
          ]
      }
     ] 
    }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
