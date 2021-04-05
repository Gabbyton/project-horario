import { Component, OnInit } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Filter } from '../../../utils/filter';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.css']
})
export class FilterSelectComponent implements OnInit {

  public model: any;
  currentPrimaryCategory: string;
  currentSecondaryCategories: string[];
  currentFilters: Filter[]; // TODO: create hierarchy of objects with interfaces to account for specific needs
  currentTimeRangeString: string;

  clickedSecondary: string;
  isAddingFilter: boolean;

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

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.currentSecondaryCategories = [];
    this.currentFilters = [];
    this.clickedSecondary = !!this.currentSecondaryCategories[0] ? this.currentSecondaryCategories[0] : '';
    this.currentPrimaryCategory = '';
    this.isAddingFilter = false;
    this.currentTimeRangeString = this.datePipe.transform(Date.now(),'MMMM');
  }

  OnPrimaryFilterSelect(newPrimaryFilterDisplay: string) {
    this.currentPrimaryCategory = newPrimaryFilterDisplay;
  }

  OnSecondaryCategorySelect(item) {
    this.currentSecondaryCategories.push(item.item);
  }

  setClickedSecondary(newClickedSecondary: string) {
    this.clickedSecondary = newClickedSecondary;
  }

  OnSecondaryCategoryRemove() {
    this.currentSecondaryCategories.splice(this.currentSecondaryCategories.indexOf(this.clickedSecondary), 1);
  }

  OnFilterChange() {
  }

  OnDateChange(isContextualTerm: boolean, contextualTerm?: string, dateRange?: Date[]) {
    // TODO: change date for logic for specific input
    if(isContextualTerm)
      this.currentTimeRangeString = contextualTerm;
    else {
      this.currentTimeRangeString = `${this.datePipe.transform(dateRange[0]),'longDate'} and ending ${this.datePipe.transform(dateRange[1]),'longDate'}`;
    }
  }

}
