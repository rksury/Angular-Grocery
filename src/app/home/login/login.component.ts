import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from './login.service';
import {Router} from '@angular/router';

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

    constructor(private loginService: LoginService, private router: Router) {
    }

    ngOnInit() {
    }

    onSubmit() {
        console.warn(this.submitform.value);
        this.loginService.Login(this.submitform.value).subscribe(data => {
                try {
                    window.localStorage.setItem('token', data['token']);
                    window.localStorage.setItem('user', data['user'].name);
                    this.router.navigate(['/home/dashboard']);
                    // window.localStorage.setItem('user', data.user);
                    // this.utils.presentToast('Logged in as ' + data.user.name);
                } catch (e) {
                    console.log(e);
                }

            });
    }


}
