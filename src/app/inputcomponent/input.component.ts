import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'input-view',
    templateUrl: 'input.component.html'
})
export class InputView {
    array: any = [4, 2, 10, 6, 3, 8];
    size: any;
    unsortedValues: any;
    delay: any;
    @Output() randomize = new EventEmitter();
    @Output() sorter = new EventEmitter();
    @Output() delayIt = new EventEmitter();
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
        this.randomize.emit(this.array);
    }

    sort(){
        if(!this.sorter) {
            console.log('Sorting function not specified');
            return;
        }
        this.sorter.emit('');
    }

    changedDelay(){
        if(this.delayIt){
            this.delayIt.emit(this.delay);
        }
    }
}