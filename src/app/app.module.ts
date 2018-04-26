import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BubbleSort } from './bubblesort/bubblesort.component';
import { AppRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    BubbleSort
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
