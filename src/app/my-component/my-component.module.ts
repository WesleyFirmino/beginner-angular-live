import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyComponentComponent } from './my-component.component';
import { MyComponentRoutingModule } from './my-component-rounting';

@NgModule({
  declarations: [
    MyComponentComponent
  ],
  imports: [
    BrowserModule,
    MyComponentRoutingModule
  ],
  providers: []
})
export class MyComponentModule { }
