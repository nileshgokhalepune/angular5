import { Component } from '@angular/core';
import { getTypeNameForDebugging } from '@angular/core/src/change_detection/differs/iterable_differs';

@Component({
    selector: 'prime-numbers',
    templateUrl: 'primenumbers.component.html'
})
export class PrimeNumbers {
    array: any[];
    primes: any[] = [];
    startDateTime:Date;
    endDateTime:Date;
    delay: any = 1;

    mark() {
        this.endDateTime = null;
        this.startDateTime = new Date();
        this.primes = [];
        for (var i = 0; i < this.array.length; i++) {
            var sqrt = Math.sqrt(this.array[i]);
            var isPrime = true;
            for (var j = 2; j <= sqrt; j++) {
                if ((this.array[i] % j) === 0) {
                    isPrime = false;
                }
                if (!isPrime) break;
            }
            if (isPrime) this.primes.push(this.array[i]);
        }
        this.endDateTime = new Date();
    }

    handleRandomize(data) {
        this.array = data;
        this.primes = [];
    }
}