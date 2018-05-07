import { Component } from '@angular/core';
@Component({
    selector: 'insertion-sort',
    templateUrl: 'insertionsort.component.html'
})
export class InsertionSort {
    array: any[];
    sorted: any[];
    delay: any = 1;
    sort() {
        for (var i = 0; i < this.sorted.length; i++) {
            var j = 0;
            while (j < this.sorted.length) {
                if (this.sorted[i] > this.sorted[j] && i < j) {
                    var lower = this.sorted.splice(j, 0);
                    var carriedOver = lower[0];
                    var removePos = j;
                    var insertPos = i;
                    this.sorted.splice(j, 1)
                }
                j++;
            }
        }
    }

    delayed(val) {
        this.delay = val;
    }

    handleRandomize(data) {
        this.array = data;
        this.sorted = data;
    }

}