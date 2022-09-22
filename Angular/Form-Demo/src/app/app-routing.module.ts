import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RectiveFormExampleComponent } from './core/rective-form-example/rective-form-example.component';
import { TempplateFormComponent } from './tempplate-form/tempplate-form.component';

const routes: Routes = [
  {
    path:'templte',
    component:TempplateFormComponent
  },
  {
    path:'reactive',
    component:RectiveFormExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
