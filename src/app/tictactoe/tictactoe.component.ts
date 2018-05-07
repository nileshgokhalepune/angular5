import { Component } from '@angular/core';
@Component({
    selector: 'tic-tac-toe',
    templateUrl: 'tictactoe.component.html',
    styles: [
        '.cliente { margin-top:20px; border: #cdcdcd medium solid; border-radius: 10px; -moz-border-radius: 10px; -webkit-border-radius: 10px; height:30px;  text-align:center;vertical-align:middle}',
        '.cliente:hover{ border-color:red}',
        `.cliente:hover img{ opacity:0.9}`,
        '.cliente img{ width:10px; height:10px; opacity:0.2}',
        '.cliente marked{ opacity:0.2; border-color:red }'
    ]
})
export class TicTacToe {
    private cnt = 1;
    matrix = Array(3).fill(0).map((x, i) => Array(3).fill(0).map((j, k) => this.cnt++));
    user: any[] = [[]];
    marked($event) {
        this.user.push($event);
        var tot;
        this.user.forEach((item) => {
            tot += item;
        }); 
        console.log($event);
    }
}