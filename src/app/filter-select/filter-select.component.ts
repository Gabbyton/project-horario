import { Component, OnInit } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.css']
})
export class FilterSelectComponent implements OnInit {

  public model: any;
  currentPrimaryFilter: string;
  currentSecondaryFilters: string[];

  clickedSecondary: string;

  // TODO: prefetch array of categories
  // TODO: make primary category model separating long name, short name and emoji
  primaryCategories: string[] = [
    '🍔 Food',
    '👋 Get-togethers',
    '🎙️🎭 Concerts/Shows',
    '💓 Safespaces',
    '⚽ Fun and Games'
  ];

  secondaryCategories: string[] = [
    'Music',
    'Visual Art',
    'Performing Arts',
    'Film',
    'Lectures & Books',
    'Fashion',
    'Festivals & Fairs',
    'Charities',
    'Sports & Active Life',
    'Nightlife',
    'For Kids & Family'
  ];

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.secondaryCategories.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );

  constructor() { }

  ngOnInit(): void {
    this.currentSecondaryFilters = [];
    this.clickedSecondary = !!this.currentSecondaryFilters[0] ? this.currentSecondaryFilters[0]: '';
    this.currentPrimaryFilter = '';
  }

  OnPrimaryFilterSelect(newPrimaryFilterDisplay: string) {
    this.currentPrimaryFilter = newPrimaryFilterDisplay;
  }

  OnSecondaryFilterSelect(item) {  
    this.currentSecondaryFilters.push(item.item);
  }

  setClickedSecondary(newClickedSecondary: string) {
    this.clickedSecondary = newClickedSecondary;
  }

  OnSecondaryFilterRemove() {  
    this.currentSecondaryFilters.splice(this.currentSecondaryFilters.indexOf(this.clickedSecondary),1);
  }
 
}
