import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEventComponent } from './pages/add-event-view/add-event/add-event.component';
import { CalendarComponent } from './pages/calendar-view/calendar/calendar.component';

const routes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: 'add-event', component: AddEventComponent },
  { path: '', redirectTo: '/calendar', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
