import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BetterhighlightDirective } from './CustomDirective/betterhighlight.directive';
import { HoverDirective } from './CustomDirective/hover.directive';
import { ClassDirective } from './CustomDirective/class.directive';
import { StyleDirective } from './style.directive';
import { IfDirective } from './if.directive';

@NgModule({
  declarations: [
    AppComponent,
    BetterhighlightDirective,
    HoverDirective,
    ClassDirective,
    StyleDirective,
    IfDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
