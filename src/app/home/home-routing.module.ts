import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';

import {DashboardComponent} from './dashboard/dashboard.component';
import {SpecialofferComponent} from './specialoffer/specialoffer.component';
import {EventsComponent} from './events/events.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {OurservicesComponent} from './ourservices/ourservices.component';
import {ProductsComponent} from './products/products.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';

const routes: Routes = [
    {
        path: 'home', component: HomeComponent,
        children: [
            {path: 'login', component: LoginComponent},
            {path: 'signup', component: SignupComponent},

            {path: 'dashboard', component: DashboardComponent},
            {path: 'spcl', component: SpecialofferComponent},
            {path: 'events', component: EventsComponent},
            {path: 'aboutus', component: AboutusComponent},
            {path: 'services', component: OurservicesComponent},
            {path: 'products', component: ProductsComponent},
            {path: '', redirectTo: '/dashboard', pathMatch: 'full'},

        ]

    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
