import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
     categories = {};

    selectedCity = 'Select City';

    onChangeCity(city) {
        this.selectedCity = city;

    }
    constructor(private homeService: HomeService, private router: Router ) {
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
