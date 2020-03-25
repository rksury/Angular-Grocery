import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';

import {DashboardComponent} from './dashboard/dashboard.component';
import {SpecialofferComponent} from './specialoffer/specialoffer.component';
import {EventsComponent} from './events/events.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {OurservicesComponent} from './ourservices/ourservices.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent  },
            { path: '', redirectTo: '/home/dashboard', pathMatch: 'full'},

            { path: 'spcl', component: SpecialofferComponent  },
            { path: 'events', component: EventsComponent  },
            { path: 'aboutus', component: AboutusComponent  },
            { path: 'services', component: OurservicesComponent  },

    ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
