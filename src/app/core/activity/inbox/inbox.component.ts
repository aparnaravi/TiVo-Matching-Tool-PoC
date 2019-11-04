import { Component, OnInit, ViewChild, Output, EventEmitter, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { MediaMatcher } from '@angular/cdk/layout';
import { InboxService } from './inbox.service';
import { CONDITIONS_FUNCTIONS } from './search-operation-constants';
import * as utility from './utility';
import { GloabalConfig as config } from '../../../config'

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})

export class InboxComponent implements OnInit, OnDestroy {
  @Output() taskDetailsFunc = new EventEmitter<any>();
  @Input() simpleSearchConfig: any;
  @Input() sideNavFilterName: any;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  private _filterMethods = CONDITIONS_FUNCTIONS;
  hideToolBar: boolean;
  constructor(
    private inboxService: InboxService,
    private media: MediaMatcher,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 800px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  currentSerachEventName: string = ""
  selectedSearchOptions = []
  panelOpenState = true;
  displayedColumns = [];
  inboxColumnConfig: any[];
  selectedInboxConfig: any;
  advancedSearchFilterList = [];
  savedFilterList = [];
  searchInputValue = null;
  DATATYPES = {
    'STRING': 'STRING',
    'DATE': 'DATE',
    'LINK': 'LINK',
    'NUMBER': 'NUMBER',
    'BOOLEAN': 'BOOLEAN'
  };
  defaultSort = {
    "name": "User",
    "sortType": "asc"
  }
  menus = [{ 'val': 'Flagged', 'toolTip': 'Show flagged records only' }, { 'val': 'Accepted Matches', 'toolTip': 'Show records with accepted status' }]
  isSideNavFilter: boolean;
  sideNavFilterValue: any
  selectedRows: any[] = [];
  inboxData = new MatTableDataSource<any>([]);
  totalNoOfInboxData = 0;
  pageObj = {
    pageIndex: 0,
    pageSize: 10
  };
  savedSearchData = [];
  activeFilterList = [];
  globalSerchFilter: any;
  selection = new SelectionModel<any>(true, []);
  advancedFilterOpened: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.inboxData.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.inboxData.data.forEach(row => this.selection.select(row));
  }

  sideNavFilter(menu) {
    !this.activeFilterList.includes("sideNavFilter") ? this.activeFilterList.push("sideNavFilter") : ""
    this.sideNavFilterValue = menu;
    this.isSideNavFilter = true;
    if (this.globalSerchFilter == undefined) {
      this.globalSerchFilter = {
        sideNavFilter: menu
      }
    }
    else {
      this.globalSerchFilter.sideNavFilter = menu
    }
    this.inboxData.filter = this.globalSerchFilter;
  }

  sidenavEvent(flagVal) {
    if (flagVal[0] == "value removed") {
      this.activeFilterList.includes("sideNavFilter") ? this.removeFromActiveFilterList("sideNavFilter") : "";
      this.globalSerchFilter.sideNavFilter = ""
      this.isSideNavFilter = false;
      this.inboxData.filter = this.globalSerchFilter;
    }
  }

  formSavedFilterListfilter(filterlist) {
    (filterlist.length > 0 && !this.activeFilterList.includes("savedSearch")) ? this.activeFilterList.push("savedSearch") : ""
    filterlist.length == 0 ? this.removeFromActiveFilterList("savedSearch") : ""
    this.savedFilterList = filterlist;
    let searchFilter: any
    let values = [];
    let fieldNames = [];
    let conditions = []
    if (this.savedFilterList && this.savedFilterList.length != 0) {
      for (var i = 0; i < this.savedFilterList.length; i++) {
        values.push(this.savedFilterList[i].value)
        conditions.push(this.savedFilterList[i].operator)
        fieldNames.push(this.savedFilterList[i].fieldName)
      }
      searchFilter = {
        values: values,
        conditions: conditions,
        methods: this._filterMethods,
        fieldName: fieldNames
      }
    }
    if (this.globalSerchFilter == undefined) {
      this.globalSerchFilter = {
        savedSearch: searchFilter
      }
    }
    else {
      this.globalSerchFilter.savedSearch = searchFilter
    }
    this.inboxData.filter = this.globalSerchFilter;
  }

  savedSearchUpdateEvent(filterlist) {
    this.selectedSearchOptions = filterlist;
    this.formSavedFilterListfilter(filterlist);
  }

  onSavedSelectOptionChange(event) {
    this.advancedFilterOpened = false;
    this.formSavedFilterListfilter(event);
  }

  selectionHandler = (selectionData) => {
    if (Array.isArray(selectionData.added)) {
      for (let i = 0; i < selectionData.added.length; i++) {
        if (selectionData.added[i]) {
          this.selectedRows.push(selectionData.added[i]);
        }
      }
    }
    if (Array.isArray(selectionData.removed)) {
      for (let i = 0; i < selectionData.removed.length; i++) {
        if (selectionData.removed[i]) {
          this.selectedRows = this.selectedRows.filter(function (item) {
            return item.RecordID != selectionData.removed[i].RecordID;
          });
        }
      }
    }
  }

  initalizeInbox() {
    this.inboxData.data = this.inboxService.data;
    this.totalNoOfInboxData = this.inboxData.data.length;
    this.inboxData.filter = "";
    this.searchInputValue = ""
    this.selection = new SelectionModel<any>(true, []);
    this.selection.onChange.subscribe(
      data => {
        this.selectionHandler(data);
      }
    );
    this.inboxData.paginator = this.paginator;
    this.inboxData.sort = this.sort;
  }

  savedSearchEvent(savedSearchData) {
    this.savedSearchData = savedSearchData
  }

  resetInbox() {
    this.selection.clear();
    this.advancedSearchFilterList = []
    this.activeFilterList = [];
    this.savedFilterList = [];
    this.selectedSearchOptions = [];
    this.isSideNavFilter = false;
    this.globalSerchFilter = {}
    this.inboxData.filter = this.globalSerchFilter;
  }

  getProperty = (obj, path) => (
    obj[path]
  )

  applyInputFilter($event) {
    if (this.globalSerchFilter == undefined) {
      this.globalSerchFilter = {
        seachValueInput: this.searchInputValue.trim().toLowerCase()
      }
    }
    else {
      this.globalSerchFilter.seachValueInput = this.searchInputValue.trim().toLowerCase()
    }
    if (this.searchInputValue != "") {
      !this.activeFilterList.includes("searchInputValue") ? this.activeFilterList.push("searchInputValue") : ""
      this.paginator.pageIndex = this.pageObj.pageIndex;
      this.inboxData.filter = this.globalSerchFilter;
    }
    else {
      this.activeFilterList.includes("searchInputValue") ? this.removeFromActiveFilterList("searchInputValue") : ""
    }
  }
  clearSimplesearch() {
    this.activeFilterList.includes("searchInputValue") ? this.removeFromActiveFilterList("searchInputValue") : ""
    this.globalSerchFilter.seachValueInput = "";
    this.searchInputValue = "";
    this.inboxData.filter = this.globalSerchFilter;
  }

  converToLocalDate(obj, path) {
    let dateObj = path.split('.').reduce((o, data) => o && o[data], obj)
    if (dateObj && dateObj.length > 0) {
      dateObj = utility.getDateWithLocaleTimeZone(dateObj)
    }
    return dateObj;
  }

  openRecordDetails(row, colname) {
    if (row) {
      this.router.navigate(['/app/blackstar/record/' + colname + '/' + row.RecordID], {
      });
    }
  }

  prepareInboxFields() {
    this.inboxColumnConfig = [{ name: "select", title: "" }];
    if (this.selectedInboxConfig) {
      this.selectedInboxConfig.columnDefs.forEach(columnDef => {
        let columnObj: any = {
          name: columnDef.field,
          title: columnDef.displayName,
          dataType: columnDef.dataType,
          isSortable: columnDef.enableSorting,
          isLink: columnDef.isLink,
          propertyId: columnDef.propertyId
        };
        this.inboxColumnConfig.push(columnObj);
      });
      this.displayedColumns = this.inboxColumnConfig.map(c => c.name);
    }
  }

  removeFromActiveFilterList(elementname) {
    if (this.activeFilterList.includes(elementname)) {
      var index = this.activeFilterList.indexOf(elementname);
      if (index > -1) {
        this.activeFilterList.splice(index, 1);
      }
    }
  }

  advancedSearch(filterList) {
    (filterList.length > 0 && !this.activeFilterList.includes("advancedSearch")) ? this.activeFilterList.push("advancedSearch") : ""
    filterList.length == 0 ? this.removeFromActiveFilterList("advancedSearch") : ""
    this.advancedSearchFilterList = filterList;
    let searchFilter: any
    let values = [];
    let fieldNames = [];
    let conditions = []
    if (this.advancedSearchFilterList && this.advancedSearchFilterList.length != 0) {
      for (var i = 0; i < this.advancedSearchFilterList.length; i++) {
        values.push(this.advancedSearchFilterList[i].value)
        conditions.push(this.advancedSearchFilterList[i].operator)
        fieldNames.push(this.advancedSearchFilterList[i].fieldName)
      }
      searchFilter = {
        values: values,
        conditions: conditions,
        methods: this._filterMethods,
        fieldName: fieldNames
      }
    }

    if (this.globalSerchFilter == undefined) {
      this.globalSerchFilter = {
        advancedSearch: searchFilter
      }
    }
    else {
      this.globalSerchFilter.advancedSearch = searchFilter
    }
    this.inboxData.filter = this.globalSerchFilter;
  }

  ngOnInit() {
    if(config.getToolBarConfig()){
      this.hideToolBar=true;
  }
    this.selectedInboxConfig = this.inboxService.selectedInboxConfig;
    this.prepareInboxFields();
    this.initalizeInbox();
    this.inboxData.filterPredicate = (data, filtre: any) => {
      this.selection.clear();
      let finalResult: boolean = true;
      let searchInputMatched: boolean = false;
      let sideNavFilterMatched: boolean = false;
      let advancedFilterMatched: boolean = false;
      let savedFilterMatched: boolean = false;
      if (filtre.seachValueInput && filtre.seachValueInput != "" && this.searchInputValue != "") {
        let keys = Object.keys(data);
        for (const key of keys) {
          if (key != "IsFlagged" && key != "VerificationNeeded") {
            if (typeof (data[key]) == "string") {
              if ((data[key].toLowerCase()).indexOf(filtre.seachValueInput.toLowerCase()) != -1) {
                searchInputMatched = true;
                break;
              }
            }
            else {
              if (data[key].toString().indexOf(filtre.seachValueInput.toString()) != -1) {
                searchInputMatched = true;
                break;
              }
            }
          }
        }
      }
      if (filtre.sideNavFilter && filtre.sideNavFilter != "" && this.isSideNavFilter == true) {
        if (this.sideNavFilterValue == "Flagged") {
          if (data['IsFlagged'] == true) {
            sideNavFilterMatched = true;
          }
        }

        if (this.sideNavFilterValue == "Accepted Matches") {
          if (data['Status'] == "Accepted") {
            sideNavFilterMatched = true;
          }
        }
      }
      if (filtre.advancedSearch) {
        let result = true;
        for (var i = 0; i < filtre.advancedSearch.fieldName.length; i++) {
          let searchCondition = filtre.advancedSearch.conditions[i];
          if (searchCondition && searchCondition !== 'none') {
            if (filtre.advancedSearch.methods[searchCondition](data[filtre.advancedSearch.fieldName[i]], filtre.advancedSearch.values[i]) === false) {
              result = false;
            }
          }
        };
        advancedFilterMatched = result;
      }
      if (filtre.savedSearch) {
        let result = true;
        for (var i = 0; i < filtre.savedSearch.fieldName.length; i++) {
          let searchCondition = filtre.savedSearch.conditions[i];
          if (searchCondition && searchCondition !== 'none') {
            if (filtre.savedSearch.methods[searchCondition](data[filtre.savedSearch.fieldName[i]], filtre.savedSearch.values[i]) === false) {
              result = false;

            }
          }
        };
        savedFilterMatched = result;
      }
      for (var i = 0; i < this.activeFilterList.length; i++) {
        if (this.activeFilterList.includes('sideNavFilter')) {
          if (sideNavFilterMatched == true) {
            finalResult = finalResult && true;
          }
          else {
            finalResult = false;
          }
        }
        if (this.activeFilterList.includes('advancedSearch')) {
          if (advancedFilterMatched == true) {
            finalResult = finalResult && true;
          }
          else {
            finalResult = false;
          }
        }
        if (this.activeFilterList.includes('savedSearch')) {
          if (savedFilterMatched == true) {
            finalResult = finalResult && true;
          }
          else {
            finalResult = false;
          }
        }
        if (this.searchInputValue != "") {
          if (searchInputMatched == true) {
            finalResult = finalResult && true;
          }
          else {
            finalResult = false;
          }
        }
        return finalResult;
      }
      if (this.activeFilterList.length == 0) {
        return true;
      }
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
