import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

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
        constructor() {
        }

        ngOnInit() {
        }

    onSubmit() {
        console.warn(this.submitform.value);
    }


}
