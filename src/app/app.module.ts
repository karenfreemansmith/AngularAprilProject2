import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent } from './components/services/services.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientComponent } from './components/client/client.component';
import { ProductComponent } from './components/product/product.component';
import { ServiceComponent } from './components/service/service.component';
import { MonthComponent } from './components/month/month.component';
import { WeekComponent } from './components/week/week.component';
import { DayComponent } from './components/day/day.component';
import { DayDetailComponent } from './components/day-detail/day-detail.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { AppointmentComponent } from './components/appointment/appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    ProductsComponent,
    ServicesComponent,
    ScheduleComponent,
    ClientsComponent,
    ClientComponent,
    ProductComponent,
    ServiceComponent,
    MonthComponent,
    WeekComponent,
    DayComponent,
    DayDetailComponent,
    ClientDetailComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'schedule',  component: ScheduleComponent },
      { path: 'clients', component: ClientsComponent }, 
      { path: 'client', component: ClientComponent },
      { path: 'client-detail', component: ClientDetailComponent },
      { path: 'day-detail', component: DayDetailComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
