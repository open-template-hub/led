import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LedComponent } from './component/led/led.component';

@NgModule( {
  declarations: [
    LedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LedComponent
  ]
} )
export class LedModule {
}
