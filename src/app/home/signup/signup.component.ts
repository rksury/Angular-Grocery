import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SignupService} from './signup.service';
import {Router} from '@angular/router';

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
        number: new FormControl(''),
        password: new FormControl(''),
        confirm_password: new FormControl(''),
    });

    constructor(private signupService: SignupService, private router: Router) {
    }

    ngOnInit(): void {
    }

    onSubmit() {
        console.warn(this.submitform.value);
        this.signupService.signup(this.submitform.value).subscribe(data => {
            try {
                window.localStorage.setItem('token', data['token']);
                // window.localStorage.setItem('token', data['user']);
                this.router.navigate(['/home/dashboard']);
            } catch (e) {
                console.log(e);
            }

        });
    }
}
