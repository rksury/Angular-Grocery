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

const routes: Routes = [
    {
        path: 'home', component: HomeComponent,
        children: [
            {path: 'login', component: LoginComponent},
            {path: 'signup', component: SignupComponent},

            {path: 'dashboard', component: DashboardComponent},
            {path: 'spcl', component: SpecialofferComponent},
            {path: 'aboutus', component: AboutusComponent},
            {path: 'services', component: OurservicesComponent},
            {path: 'products', component: ProductsComponent},
            {path: 'cart', component: CartComponent },
            {path: 'product/:id', component: ProductsComponent },

            {path: '', redirectTo: '/home/dashboard', pathMatch: 'full'},

            // { path: '**', component: PageNotFoundComponent }

        ]

    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
