import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonAComponent } from './components/button-a/button-a.component';
import { TestDirective } from './directives/test.directive';

// Components, Pipes, Directives have to be declared and exported. 3rd party modules are instanciated here.
@NgModule({
  declarations: [
    ButtonAComponent,
    TestDirective,
  ],

  imports: [
    CommonModule,
  ],

  exports: [
    CommonModule,
    ButtonAComponent,
    TestDirective,
  ]
})
export class SharedModule { }
