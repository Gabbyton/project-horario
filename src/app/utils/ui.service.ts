import { Injectable } from '@angular/core';
import { Filter } from './filter';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private filterSet: Filter[];

  constructor() { }

  generateIcons() {
    this.filterSet = [
      new Filter('wheelchair', 'Wheelchair Accessible', 'fab fa-accessible-icon')
    ]
  }
  
  getIcon(id: string): Filter {
    return this.filterSet.filter(icon => icon.name == id)[0];
  }
}
