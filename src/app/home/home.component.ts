import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';
import {Router} from '@angular/router';
import {LoginService} from './login/login.service';
import {ToastrService} from 'ngx-toastr';


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
    popup = null;

    constructor(private homeService: HomeService, private router: Router,
                private loginService: LoginService, private toastr: ToastrService) {
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
        this.loginService.logOut();
        // window.localStorage.clear();
        this.refresh();
        this.user = 'Guest';
    }

    // async showToaster() {
    //     this.popup = 'show';
    //     setTimeout(function() {
    //         this.popup = null;
    //     }, 2000);
    //
    // }

       onChangeCity(city) {
        this.selectedCity = city;

    }

    ngOnInit(): void {
        this.category_data();
        this.loginService.verifyToken();
    }

    category_data() {
        this.homeService.all_category().subscribe(data => {
            this.categories = data;
        });
    }
}
