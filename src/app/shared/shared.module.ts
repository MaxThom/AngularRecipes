import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [

  ],
  exports: [
    CommonModule,
    DropdownDirective
  ],
  declarations: [
    DropdownDirective
  ]
})
export class SharedModule { }
