import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { AdvancedSearchComponent } from '../advanced-search.component'
import { AdvancedSearchEventService } from '../advanced-search-event.service';
@Component({
  selector: 'app-chicklet',
  templateUrl: './chicklet.component.html',
  styleUrls: ['./chicklet.component.scss'],
})
export class ChickletComponent {

  @Input() filterList;
  @Input() savedFilterList;

  @Input() SideNavFilter;
  @Input() isActiveSidenav;
  constructor(
    private advancedSearchEventService: AdvancedSearchEventService
  ) {}

  ngOnInit() {
  }

  removeAdvancedSearchFilter(filterToRemove) {
    this.advancedSearchEventService.updateAdvancedSearchFilter(filterToRemove);
  }

  removeSavedSearchFilter(filterToRemove){
    this.advancedSearchEventService.updateSavedSearchFilter(filterToRemove);
  }
  removeFilter(val)  {
    this.advancedSearchEventService.updateSideNavFilter(val);
  }
}
