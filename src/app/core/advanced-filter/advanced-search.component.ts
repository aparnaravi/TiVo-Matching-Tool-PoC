
import { Component, OnInit, Input, Output, EventEmitter, Injectable, OnDestroy } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { AdvancedSearchEventService } from './advanced-search-event.service';
import { FilterDataType } from './modal/filter.data.type';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {

  @Input() selectedInboxConfig;
  @Input() filterList = [];
  @Input() currentActiveSavedFilterList;

  @Output() searchInbox = new EventEmitter<any[]>();
  @Output() savedSearch = new EventEmitter<any[]>();
  @Output() sideNavFilterForInbox = new EventEmitter<any[]>();
  @Output() savedSearchUpdateEvent = new EventEmitter<any[]>();


  savedlist = []
  advancedSearchFieldList;
  hasBetween = false;
  constructor(
    advancedSearchEventService: AdvancedSearchEventService,
  ) {
    advancedSearchEventService.advSearchfilterChanged$.subscribe(filter => {
      if (filter == "Accepted Matches" || filter == "Flagged") {
        this.updatesIdeNavChicklets(filter)
      }
      this.updateChicklet(filter)
    });

    advancedSearchEventService.savedSearchfilterChanged$.subscribe(filter => {
      this.updateSavedSearchChicklet(filter)

    })
  }

  onSelectionChange(event, selectedColumn) {
    selectedColumn.advancedSearchFields.map(field => {
      if (field.id == event.value) {
        selectedColumn.selectedFieldId = field.id;
        selectedColumn.hasValueExpression = field.isValueExpression;
        if (field.id == "between") {
          this.hasBetween = true;
        } else {
          this.hasBetween = false;
        }
      }
    })
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>, selectedColumn) {
    selectedColumn.secondValue = '';
  }

  applyFilter() {
    this.filterList = []
    this.advancedSearchFieldList.map(column => {
      if (column.selectedFieldId) {
        column.advancedSearchFields.map(field => {
          if (field.id == column.selectedFieldId) {
            if (field.isValueExpression == false) {
              column.value = ''
            }
            if (column.dataType == "DATE" && column.value) {
              if (field.id == "greaterThan") {
                column.value.setHours(23);
                column.value.setMinutes(59);
                column.value.setSeconds(59);
              }
              /* if (field.id == "lessThan") {
                column.value.setHours(0);
                column.value.setMinutes(currentDate.getMinutes());
              } */
              if (field.id == "between" && field.isRange && column.secondValue) {
                column.secondValue.setHours(23);
                column.secondValue.setMinutes(59);
                column.value.setSeconds(59);
              }
            }
            let filter;
            if (field.isRange) {
              filter = {
                isValueExpression: field.isValueExpression,
                operator: field.operator,
                from: column.value,
                to: column.secondValue,
                name: column.propertyId,
                isAdvancedSearchFilter: true,
                fieldName: column.displayName,
                isRange: true,
                dataType: column.dataType
              }
            } else if (column.value || field.isValueExpression == false) {
              filter = {
                isValueExpression: field.isValueExpression,
                operator: field.operator,
                value: column.value,
                name: column.propertyId,
                isAdvancedSearchFilter: true,
                fieldName: column.field,
                isRange: false,
                dataType: column.dataType
              }
            }
            if (filter) {
              this.filterList.push(filter)
            }
          }
        })
      }
    })
    if (this.filterList && this.filterList.length && this.filterList.length > 0) {
      this.searchInbox.next(this.filterList)
    }
  }
  containsObject(obj, list) {
    if (list.length == 0) {
      return true;
    }
    for (var i = 0; i < list.length; i++) {
      if (JSON.stringify(list[i]) == JSON.stringify(obj)) {
        return false;
      }
    }
    return true;
  }
  saveSearch() {
    this.applyFilter();
    if (this.filterList && this.filterList.length && this.filterList.length > 0) {
      for (var i = 0; i < this.filterList.length; i++) {
        (this.containsObject(this.filterList[i], this.savedlist)) ? this.savedlist.push(this.filterList[i]) : "";
      }
    }

    this.savedSearch.next(this.savedlist);
  }
  clearAllFilter() {
    this.getAdvancedSearchFieldList();
    this.filterList = [];
    this.searchInbox.next(this.filterList)
  }

  updateChicklet(filterToRemove) {
    let filterList = [];
    if (this.filterList && this.filterList.length && this.filterList.length > 0) {
      this.filterList.map(filter => {
        if (filter.name != filterToRemove.name) {
          filterList.push(filter)
        }
      })
      this.advancedSearchFieldList.map(field => {
        if (field.propertyId == filterToRemove.name) {
          field.value = '';
        }
      })
      this.filterList = filterList;
      this.searchInbox.next(filterList)
    }
  }
  updateSavedSearchChicklet(filterToRemove){
    let filterList = [];
    if (this.currentActiveSavedFilterList && this.currentActiveSavedFilterList.length && this.currentActiveSavedFilterList.length > 0) {

      for (var i = 0; i <this.currentActiveSavedFilterList.length; i++) {
        if (JSON.stringify(this.currentActiveSavedFilterList[i]) != JSON.stringify(filterToRemove)) {
             filterList.push(this.currentActiveSavedFilterList[i])
        }
      }
      this.currentActiveSavedFilterList = filterList;
      this.savedSearchUpdateEvent.next(filterList)
    }
  }
  updatesIdeNavChicklets(filterToRemove) {
    if (filterToRemove == "Flagged") {
      let flagArray = [];
      flagArray.push("value removed")
      this.sideNavFilterForInbox.next(flagArray);
    }
    if (filterToRemove == "Accepted Matches") {
      let flagArray = [];
      flagArray.push("value removed")
      this.sideNavFilterForInbox.next(flagArray);
    }
  }
  getAdvancedSearchFieldList() {
    if (this.selectedInboxConfig && this.selectedInboxConfig.columnDefs) {
      this.advancedSearchFieldList = []
      this.selectedInboxConfig.columnDefs.map(
        column => {
          if (column.dataType && column.enableSorting == true) {
            column.advancedSearchFields = FilterDataType[column.dataType + "DataType"];
            column.hasValueExpression = true;
            column.selectedFieldId = FilterDataType[column.dataType + "DataType"][0].id;
            column.value = '';
            column.secondValue = '';
            column.tooltip = "";
            //column.selectedOperator = FilterDataType[column.dataType + "DataType"][0].id
            this.advancedSearchFieldList.push(column)
          }
        }
      )
    }
  }

  ngOnInit() {
    this.getAdvancedSearchFieldList();
  }

}
