import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';

import {DashboardComponent} from './dashboard/dashboard.component';
import {SpecialofferComponent} from './specialoffer/specialoffer.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {OurservicesComponent} from './ourservices/ourservices.component';
import {ProductsComponent} from './products/products.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {CartComponent} from './cart/cart.component';
import {OrderhistoryComponent} from './orderhistory/orderhistory.component';


const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            {path: 'login', component: LoginComponent},
            {path: 'signup', component: SignupComponent},

            {path: '', component: DashboardComponent},
            {path: 'spcl', component: SpecialofferComponent},
            {path: 'aboutus', component: AboutusComponent},
            {path: 'services', component: OurservicesComponent},
            {path: 'products', component: ProductsComponent},
            {path: 'cart', component: CartComponent },
            {path: 'order_history', component: OrderhistoryComponent },
            {path: 'product/:id', component: ProductsComponent },

            {path: '', redirectTo: '/', pathMatch: 'full'},

        ]

    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
