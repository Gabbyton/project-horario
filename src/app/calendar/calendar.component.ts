import { Component, HostListener, OnInit } from '@angular/core';
import { CalendarEvent } from '../utils/calendar-event';
import { Filter } from '../utils/filter';
import { UiService } from '../utils/ui.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  imgWidth: any;
  events: CalendarEvent[];

  constructor(private uiService: UiService) { }

  ngOnInit() {
    this.imgWidth = this.getDisplayWidth(this.getScreenInnerWidth());
    this.events = [];
    for (let index = 1; index <= 10; index++) {
      this.events.push(
        new CalendarEvent(
          'My Story: Christine Howey with Phyllis Harris',
          'assets/events/event-0.png',
          ['food'],
          ['wheelchair'],
          10,
          'Maltz Museum of Jewish Heritage, 2929 Richmond Rd, Beachwood, OH',
          'Maltz Museum of Jewish Heritage',
          new Date('March 31, 2021 00:00:00'),
          '16:00:00',
          new Date('April 2, 2021 00:00:00')
        )
      )
    }
    console.log(this.events);
  }

  getIcon(id: string): Filter {
    return this.uiService.getIcon(id);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.imgWidth = this.getDisplayWidth(this.getScreenInnerWidth());
    console.log(window.innerWidth);
    console.log(this.imgWidth);
  }

  private getDisplayWidth(screenWidth: number): number {
    console.log(this.getScreenInnerWidth());
    let computedWidth = (0.07 * screenWidth) + 142.86;
    console.log(computedWidth);
    return computedWidth;
  }

  private getScreenInnerWidth(): number {
    return window.innerWidth;
  }
}
