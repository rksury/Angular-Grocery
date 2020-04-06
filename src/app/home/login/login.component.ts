import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import { HomeComponent} from '../home.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    submitform = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
    });

    constructor(private loginService: LoginService, private router: Router,
                private homeComponent: HomeComponent) {
    }

    ngOnInit() {
    }

    onSubmit() {
        console.warn(this.submitform.value);
        // @ts-ignore
        this.loginService.Login(this.submitform.value).subscribe <any> (data => {
                try {
                    window.localStorage.setItem('token', data.token);
                    window.localStorage.setItem('user', data.user.name);
                    this.router.navigate(['/']);

                    // window.localStorage.setItem('user', data.user);

                    this.homeComponent.refresh();
                    this.submitform.reset();
                } catch (e) {
                    console.log(e);
                }

            });
    }


}
