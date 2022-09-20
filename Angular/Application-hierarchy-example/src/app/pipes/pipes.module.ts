import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesComponent } from './pipes.component';
import { InbuiltPipeExampleComponent } from './inbuilt-pipe-example/inbuilt-pipe-example.component';

import { CustomePipeExampleComponent } from './custome-pipe-example/custome-pipe-example.component';
import { CurrencyPipePipe } from './currency-pipe/currency-pipe.pipe';

import { AppRoutingModule } from '../app-routing.module';
import { PipesRoutingModule } from './pipes-routing.module';


@NgModule({
  declarations: [
    PipesComponent,
    InbuiltPipeExampleComponent,
    CustomePipeExampleComponent,
    CurrencyPipePipe
  ],
  imports: [
    CommonModule,
    PipesRoutingModule
 
   
  ]
})
export class PipesModule { }
