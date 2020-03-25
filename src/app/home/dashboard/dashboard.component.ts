import {Component, OnInit} from '@angular/core';
import {DashboardService} from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  categories = {};

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit(): void {
    this.get_all_categories();
  }

  get_all_categories() {
    this.dashboardService.get_all_categories().subscribe(data => {
      console.log(data);
    });

  }

}
