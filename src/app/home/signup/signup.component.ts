import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

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
    });

    constructor() {
    }

    ngOnInit(): void {
    }

    onSubmit() {
        console.warn(this.submitform.value);
    }
}
