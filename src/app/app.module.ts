import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './pages/calendar-view/calendar/calendar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterSelectComponent } from './pages/calendar-view/filter-select/filter-select.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NavbarComponent } from './pages/calendar-view/navbar/navbar.component';
import { SplashComponent } from './pages/calendar-view/splash/splash.component';
import { PageNavComponent } from './pages/calendar-view/page-nav/page-nav.component';
import { FooterComponent } from './pages/calendar-view/footer/footer.component';
import { AddEventComponent } from './pages/add-event-view/add-event/add-event.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    FilterSelectComponent,
    NavbarComponent,
    SplashComponent,
    PageNavComponent,
    FooterComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
