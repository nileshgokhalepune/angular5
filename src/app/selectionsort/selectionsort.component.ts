import { Component } from '@angular/core';

@Component({
    selector: 'selections-sort',
    templateUrl: 'selectionsort.component.html'
})
export class SelectionSort {
    array: any[];
    delay: any = 1;
    sorted: any[] = [];
    greater: any;
    smaller: any;
    left: any;
    right: any;
    startDateTime: Date;
    endDateTime: Date;
    async sort() {
        this.endDateTime = null;
        this.startDateTime = new Date();
        this.array.forEach(item => this.sorted.push(item));
        for (var i = 0; i < this.sorted.length; i++) {
            var min = i;
            for (var j = i + 1; j < this.sorted.length; j++) {
                if (this.sorted[j] < this.sorted[min]) {
                    min = j;
                }
            }
            if (min !== j)
                await this.swap(i, min);
        } 
        this.endDateTime = new Date();
    }

    private async swap(i, j) {
        await this.sleep(this.delay);
        this.greater = i;
        this.smaller = j;
        this.left = this.sorted[i];
        this.right = this.sorted[j];
        await this.sleep(this.delay);
        var temp = this.sorted[i];
        this.sorted[i] = this.sorted[j];
        await this.sleep(this.delay);
        this.sorted[j] = temp;
        await this.sleep(this.delay);
    }

    handleRandomize(data) {
        this.sorted = [];
        this.array = data;
    }
    delayed(data) {
        this.delay = data;
    }
    sleep(ms: any) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}