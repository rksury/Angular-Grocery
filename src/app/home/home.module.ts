import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SpecialofferComponent } from './specialoffer/specialoffer.component';
import { EventsComponent } from './events/events.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OurservicesComponent } from './ourservices/ourservices.component';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    SpecialofferComponent,
    EventsComponent,
    AboutusComponent,
    OurservicesComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
