import {Component, OnInit} from '@angular/core';
import {DashboardService} from './dashboard.service';
import { from } from 'rxjs';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    products = {};

    constructor(private dashboardService: DashboardService) {
    }

    ngOnInit(): void {

        this.products_data();
    }

    products_data() {
        this.dashboardService.all_products().subscribe(data => {
            this.products = data;
        });
    }
}
