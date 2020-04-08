import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SpecialofferComponent } from './specialoffer/specialoffer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import {Toast, ToastrModule} from 'ngx-toastr';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    SpecialofferComponent,
    AboutusComponent,
    OurservicesComponent,
    ProductsComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    OrderhistoryComponent,
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
    ]
})
export class HomeModule { }
