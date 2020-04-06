import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SignupService} from './signup.service';
import {Router} from '@angular/router';
import {HomeComponent} from '../home.component';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    submitform = new FormGroup({
        name: new FormControl(''),
        username: new FormControl(''),
        email: new FormControl(''),
        mobile_number: new FormControl(''),
        password: new FormControl(''),
        confirm_password: new FormControl(''),
    });

    constructor(private signupService: SignupService, private router: Router,
                private homeComponent: HomeComponent) {
    }

    ngOnInit(): void {
    }

    onSubmit() {
        console.warn(this.submitform.value);
        // @ts-ignore
        this.signupService.signup(this.submitform.value).subscribe <any> (data => {
            try {
                window.localStorage.setItem('token', data.token);
                window.localStorage.setItem('user', data.user.name);
                this.router.navigate(['/']);
                this.homeComponent.refresh();
                this.submitform.reset();
            } catch (e)
            {
                console.log(e);
            }

    });
    }
}
