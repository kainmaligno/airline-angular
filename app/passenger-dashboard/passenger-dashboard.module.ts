import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
//containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component'
//components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-details/passenger-details.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component'
//services 
import { PassengerDashboardService } from './passenger-dashboard.service'
const routes: Routes = [
    {
        path: 'passengers',
        children: [ //declare children structure for the passengers 
            { path: '', component: PassengerDashboardComponent }, //first component to render
            { path: ':id', component: PassengerViewerComponent } // evere individual passenger 
        ]
    }
];
@NgModule({
    declarations: [
        //Containers
        PassengerDashboardComponent,
        PassengerViewerComponent,
        //Components
        PassengerCountComponent,
        PassengerDetailComponent,
        PassengerFormComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        //PassengerDashboardComponent
        PassengerViewerComponent
    ],
    providers: [
        PassengerDashboardService
    ]
})

export class PassengerDashboardModule { }