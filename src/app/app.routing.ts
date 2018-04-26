import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BubbleSort } from './bubblesort/bubblesort.component';
const appRoutes: Routes = [
    // {
    //     path: 'closestpair',
    //     component: ClosestPair
    // },
    {
        path: 'bubblesort',
        component: BubbleSort
    }
    // {
    //     path: 'selectionsort',
    //     component: SelectionSort
    // },
    // {
    //     path: 'insertionsort',
    //     component: InsertionSort
    // },
    // {
    //     path: 'mergesort',
    //     component: MergeSort
    // },
    // {
    //     path: '',
    //     pathMatch: 'full',
    //     redirectTo: 'closestpair'
    // }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRouting {

}