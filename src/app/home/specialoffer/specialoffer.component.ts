import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-specialoffer',
    templateUrl: './specialoffer.component.html',
    styleUrls: ['./specialoffer.component.css']
})
export class SpecialofferComponent implements OnInit {

    count = 'select number';

    onClick(num) {
        this.count = num;
    }

    constructor() {
    }



    ngOnInit(): void {
    }

}
