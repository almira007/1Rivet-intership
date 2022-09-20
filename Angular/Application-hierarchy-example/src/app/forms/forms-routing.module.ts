import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormControlExampleComponent } from './form-control-example/form-control-example.component';
import { FormGroupExampleComponent } from './form-group-example/form-group-example.component';
import { FormsComponent } from './forms.component';
import { StudentFormComponent } from './student-form/student-form.component';

const routes: Routes = [
  {
     path: '', 
     component: FormsComponent,
     children:[
      {
        path:'form-control',
        component:FormControlExampleComponent
      },
      {
        path:'form-group',
        component:FormGroupExampleComponent
      },
      {
        path:'student-form',
        component:StudentFormComponent
      }
     ] 
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
