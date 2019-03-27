import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstMobileComponentComponent } from './first-mobile-component/first-mobile-component.component';
import { PracticeComponentComponent } from './practice-component/practice-component.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstMobileComponentComponent,
    PracticeComponentComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
