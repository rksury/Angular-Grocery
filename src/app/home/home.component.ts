import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    categories = {};

    constructor(private homeService: HomeService) {
    }

    ngOnInit(): void {
        this.all_products();
    }

    all_products() {
        this.homeService.all_data().subscribe(data => {
            this.categories = data;
        });
    }
}
