import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import {MatMenuModule} from '@angular/material/menu';
import { Component2Component } from './component2/component2.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { Component3Component } from './component3/component3.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    // Component4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
