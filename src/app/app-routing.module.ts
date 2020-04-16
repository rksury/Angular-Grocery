import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeModule} from './home/home.module';
import {NotfoundComponent} from './notfound/notfound.component';


const routes: Routes = [

    {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
    {path: '404', component: NotfoundComponent},
    {path: '**', redirectTo: '/404'},

];

@NgModule({
    imports: [
        HomeModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
