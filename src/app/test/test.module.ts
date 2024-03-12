import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestRoutingComponent } from './test-routing/test-routing.component';


@NgModule({
  declarations: [
    TestRoutingComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
