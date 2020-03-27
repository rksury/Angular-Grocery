import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SpecialofferComponent } from './specialoffer/specialoffer.component';
import { EventsComponent } from './events/events.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    SpecialofferComponent,
    EventsComponent,
    AboutusComponent,
    OurservicesComponent,
    ProductsComponent,
    LoginComponent,
    SignupComponent,
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class HomeModule { }
