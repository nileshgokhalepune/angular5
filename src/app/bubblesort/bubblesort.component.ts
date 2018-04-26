import { Component } from '@angular/core';


@Component({
    selector: 'bubble-sort',
    templateUrl: 'bubblesort.component.html'
})
export class BubbleSort {
    array: any = [4, 2, 10, 6, 3, 8];
    sortedarray: any = [];
    unsortedValues: any;
    size: any;
    private temp: any;
    private first: any;
    private second: any;
    delay: any;
    firstValue: any;
    secondValue: any;
    async sort() {
        this.sortedarray = [];
        this.array.forEach((data: any) => this.sortedarray.push(data));
        for (var i = 0; i < this.sortedarray.length; i++) {
            for (var j = i; j < this.sortedarray.length; j++) {
                if (this.sortedarray[i] > this.sortedarray[j]) {
                    //swap values
                    this.first = i;
                    this.second = j;
                    this.firstValue = this.sortedarray[i];
                    this.secondValue = this.sortedarray[j];
                    await this.sleep(this.delay);
                    var temp = this.sortedarray[i];
                    this.sortedarray[i] = null;
                    this.temp = temp;
                    await this.sleep(this.delay);
                    this.sortedarray[i] = this.sortedarray[j];
                    this.sortedarray[j] = null;
                    await this.sleep(this.delay);
                    this.sortedarray[j] = temp;
                    this.temp = null;
                }
            }
        }
    }

    changeUnsorted() {
        if (this.unsortedValues && this.unsortedValues.length > 1) {
            this.array = [];
            this.unsortedValues.split(',').forEach((data: any) => this.array.push(parseInt(data)));
        }
    }


    randomGenerator() {
        this.array = [];
        for (var i = 0; i < this.size; i++) {
            this.array.push(parseInt(((Math.random() * 100) + 1).toString()));
        }
    }

    private sleep(ms: any) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}