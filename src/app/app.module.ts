import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewCompComponent } from './new-comp/new-comp.component';
import { InlineComponent } from './inline/inline.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCompComponent,
    InlineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
