import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  imgWidth: any;
  events: any[];

  constructor() { }

  ngOnInit() {
    this.imgWidth = this.getDisplayWidth(this.getScreenInnerWidth());
    this.events = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
