import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BubbleSort } from './bubblesort/bubblesort.component';
import { SelectionSort } from './selectionsort/selectionsort.component';
import { InsertionSort } from './insertionsort/insertionsort.component'
import { PrimeNumbers } from './primenumbers/primenumbers.component';
import { TicTacToe } from './tictactoe/tictactoe.component';
const appRoutes: Routes = [
    // {
    //     path: 'closestpair',
    //     component: ClosestPair
    // },
    {
        path: 'bubblesort',
        component: BubbleSort
    },
    {
        path: 'selectionsort',
        component: SelectionSort
    },
    {
        path: 'insertionsort',
        component: InsertionSort
    },
    // {
    //     path: 'mergesort',
    //     component: MergeSort
    // },
    // {
    //     path: '',
    //     pathMatch: 'full',
    //     redirectTo: 'closestpair'
    // },
    {
        path: 'primenumbers',
        component: PrimeNumbers
    },
    {
        path: 'tictactoe',
        component: TicTacToe
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRouting {

}