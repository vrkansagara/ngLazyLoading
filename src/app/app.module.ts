/* JavaScript imports */
/* import modules so that AppModule can access them */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import the feature module here so you can add it to the imports array below
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';

import { StaticPageComponent } from './static-page/container/static-page/static-page.component';
import { StaticPageModule } from './static-page/static-page.module';

import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

// The @NgModule decorator identifies AppModule as an NgModule class. @NgModule takes a metadata object
// that tells Angular how to compile and launch the application.

/*
declarations—this application's lone component.
imports—import BrowserModule to have browser specific services such as DOM rendering, sanitization, and location.
providers—the service providers.
bootstrap—the root component that Angular creates and inserts into the index.html host web page.

*/

@NgModule({/* The @NgModule decorator lets Angular know that this is an NgModule. */
  declarations: [
    AppComponent
    // YourComponent,
    // YourPipe,
    // YourDirective
  ],
  imports: [/* These are NgModule imports. */
    // Core Module
    BrowserModule,
    FormsModule,

    // Application Module
    AppRoutingModule,
    CustomerDashboardModule,
    StaticPageModule,
    PassengerDashboardModule
  ],
  providers: [],
  bootstrap: [ // An Angular app needs at least one module that serves as the root module
    AppComponent
  ]
})
export class AppModule { }



// NgModule	-> Import it from	-> Why you use it
// BrowserModule->@angular/platform-browser->When you want to run your app in a browser
// CommonModule->@angular/common->When you want to use NgIf, NgFor
// FormsModule->@angular/forms->When you want to build template driven forms (includes NgModel)
// ReactiveFormsModule->@angular/forms->When you want to build reactive forms
// RouterModule->@angular/router->When you want to use RouterLink, .forRoot(), and .forChild()
// HttpClientModule->@angular/common/http->When you want to talk to a server
