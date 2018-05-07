import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BubbleSort } from './bubblesort/bubblesort.component';
import { AppRouting } from './app.routing';
import { SelectionSort } from './selectionsort/selectionsort.component';
import { InputView } from './inputcomponent/input.component';
import { InsertionSort } from './insertionsort/insertionsort.component';
import { PrimeNumbers } from './primenumbers/primenumbers.component';
import { TicTacToe } from './tictactoe/tictactoe.component';
@NgModule({
  declarations: [
    AppComponent,
    BubbleSort,
    SelectionSort,
    InputView,
    InsertionSort,
    PrimeNumbers,
    TicTacToe
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
