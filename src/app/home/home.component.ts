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
        this.category_data();
    }

    category_data() {
        this.homeService.all_category().subscribe(data => {
            this.categories = data;
        });
    }
}
