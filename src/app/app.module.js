"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var contact_component_1 = require('./components/contact/contact.component');
var about_component_1 = require('./components/about/about.component');
var products_component_1 = require('./components/products/products.component');
var services_component_1 = require('./components/services/services.component');
var schedule_component_1 = require('./components/schedule/schedule.component');
var clients_component_1 = require('./components/clients/clients.component');
var client_component_1 = require('./components/client/client.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                contact_component_1.ContactComponent,
                about_component_1.AboutComponent,
                products_component_1.ProductsComponent,
                services_component_1.ServicesComponent,
                schedule_component_1.ScheduleComponent,
                clients_component_1.ClientsComponent,
                client_component_1.ClientComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: 'about', component: about_component_1.AboutComponent },
                    { path: 'contact', component: contact_component_1.ContactComponent },
                    { path: 'products', component: products_component_1.ProductsComponent },
                    { path: 'services', component: services_component_1.ServicesComponent },
                    { path: 'schedule', component: schedule_component_1.ScheduleComponent },
                    { path: 'clients', component: clients_component_1.ClientsComponent },
                    { path: 'client', component: client_component_1.ClientComponent }
                ])
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
