import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeAPipe } from './pipe-a.pipe';
import { PipeBPipe } from './pipe-b.pipe';



@NgModule({
  declarations: [PipeAPipe, PipeBPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
