import { Component, OnInit } from '@angular/core';
import { UiService } from './utils/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'horario';

  constructor(private uiService: UiService) {}

  ngOnInit(): void {
    this.uiService.generateIcons();
  }
}
