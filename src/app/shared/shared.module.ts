import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrrorMsgDirective } from './directives/errror-msg.directive';
import { CustomIfDirective } from './directives/custom-if.directive';



@NgModule({
  declarations: [
    ErrrorMsgDirective,
    CustomIfDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ErrrorMsgDirective,
    CustomIfDirective
  ]
})
export class SharedModule { }
