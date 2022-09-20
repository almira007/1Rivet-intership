import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomePipeExampleComponent } from './custome-pipe-example/custome-pipe-example.component';
import { InbuiltPipeExampleComponent } from './inbuilt-pipe-example/inbuilt-pipe-example.component';
import { PipesComponent } from './pipes.component';

const routes: Routes = [
  {
     path: '', 
     component: PipesComponent ,
     children:[
      {
        path:'inbuiltpipe',
        component:InbuiltPipeExampleComponent
      },
      {
        path:'customepipe',
        component:CustomePipeExampleComponent
      }
     ]
    }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesRoutingModule { }
