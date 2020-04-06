import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    // logedin = window.localStorage.getItem('token') === null;
    user = window.localStorage.getItem('user');

    categories = {};

    selectedCity = 'Select City';

    constructor(private homeService: HomeService, private router: Router) {
        this.refresh();
    }

    refresh() {
        // this.logedin = window.localStorage.getItem('token') === null;
        this.user = window.localStorage.getItem('user');
        if (this.user === null) {
            this.user = 'Guest';
        }
    }

    userLogout() {
    window.localStorage.clear();
    this.refresh();
    this.user = 'Guest';
    }


    onChangeCity(city) {
        this.selectedCity = city;

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
