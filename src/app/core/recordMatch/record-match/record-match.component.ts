import { NotificationService } from './../../shared/services/notification.service';
import { SearchFormComponent } from './../../search-form/search-form.component';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SelectedRowEventService } from '../../search-result-table/selected-row-event.service';
import { SearchTableServiceService } from '../../search-result-table/search-table-service.service';

import { GloabalConfig as config } from '../../../config'
@Component({
  selector: 'app-record-match',
  templateUrl: './record-match.component.html',
  styleUrls: ['./record-match.component.scss']
})
export class RecordMatchComponent implements OnInit {
  @Input() selectedData;
  items = [];
  rowItems = [{}, {}, {}, {}];
  VIEW_TYPES = {
    "COLUMN_VIEW": "COLUMN_VIEW",
    "ROW_VIEW": "ROW_VIEW"
  }
  viewType;
  searchView: boolean = false;
  data = [];
  keys = [];
  vissibleKeys = {};
  recordValToBeMatched: any;
  disablePagination: boolean = false;
  highLightRecord: boolean = false;
  rowViewMainItem = {};
  hideToolBar: boolean;
  constructor(
    public dialog: MatDialog,
    private selectedRowEventService: SelectedRowEventService,
    private searchTableServiceService: SearchTableServiceService,
    private notificationService: NotificationService
  ) {
    this.selectedRowEventService.selecterRowEvent$.subscribe(data => {
      this.initializeRecordData(data)
    });

  }

  onViewTypeChange(event) {
    this.rowViewMainItem = {};
    this.viewType = event.value;
    if (this.viewType == this.VIEW_TYPES.COLUMN_VIEW) {
      this.items = this.data.slice(0, 4);
    } else {
      this.items = [];
      this.items.push(this.data[0]);
    }
    this.searchView = false;
  }
  onActionClick() {
    this.notificationService.showSnackNotification("Invoking selected Action...");
  }

  openSearchForm() {
    this.dialog.open(SearchFormComponent, {
      width: '60%',
      height: '100%',
      position: { right: '0' },
      hasBackdrop: false
    });
  }

  changeToColumnView() {
    this.rowViewMainItem = {};
    this.viewType = this.VIEW_TYPES.COLUMN_VIEW;
    if (this.viewType == this.VIEW_TYPES.COLUMN_VIEW) {
      this.items = this.data.slice(0, 4);
    } else {
      this.items = [];
      this.items.push(this.data[0]);
    }
    this.searchView = false;
  }

  showSearchView() {
    this.items = [];
    this.items.push(this.data[0]);
    this.data = this.items;
    this.rowItems = this.items;
    this.searchView = true;
  }

  initializeRecordData(data) {
    this.rowViewMainItem = {};
    if (data) {
      data.sort(function (a, b) { return (a.MatchScore < b.MatchScore) ? 1 : ((b.MatchScore < a.MatchScore) ? -1 : 0); });
      this.data = data;
      this.rowItems = data;
    }
    if (this.viewType == this.VIEW_TYPES.COLUMN_VIEW) {
      if (this.data.length > 4) {
        this.items = this.data.slice(0, 4);
      }
      else {
        this.items = this.data
      }

    } else {
      this.items = [];
      this.items.push(this.data[0]);
    }
    this.searchView = false;
    if (data.length > 4) {
      this.disablePagination = false;
    }
    else {
      this.disablePagination = true;
    }
  }

  getFilterValue(key) {
    for (var i = 0; i < this.keys.length; i++) {
      if (this.keys[i] == key) {
        this.vissibleKeys[this.keys[i]] = true
      } else {
        this.vissibleKeys[this.keys[i]] = false
      }
    }
  }

  selectedRowRecord = (item) => {
    this.rowViewMainItem = {};
    if (this.viewType == this.VIEW_TYPES.ROW_VIEW) {
      this.items = [];
      this.rowViewMainItem = item;
      this.items.push(item);
    }
    this.highLightRecord = true;
  }


  formVissibleKeysObject(keyObjects) {
    for (var i = 0; i < keyObjects.length; i++) {
      this.vissibleKeys[keyObjects[i]] = true
    }

  }
  getBulletColorCode(item, property) {
    if (item[property].match >= 80) {
      return 'success-bullet'
    }
    else if (item[property].match > 60 && item[property].match < 80) {
      return 'warn-bullet'
    }
    else {
      return 'alert-bullet'
    }
  }
  showNextSetOfRecords() {
    this.items = this.data.slice(4, 8);
  }
  showPrevSetOfRecords() {
    this.items = this.data.slice(0, 4);
  }
  ngOnInit() {

    if(config.getToolBarConfig()){
      this.hideToolBar=true;
  }
    this.recordValToBeMatched = Object.assign({}, this.searchTableServiceService.recordTobematched)
    this.data = this.searchTableServiceService.displayData;

    if (this.data) {
      this.data.sort(function (a, b) { return (a.MatchScore < b.MatchScore) ? 1 : ((b.MatchScore < a.MatchScore) ? -1 : 0); });
      this.rowItems = this.data;
    }

    this.keys = Object.keys(this.data[0]);
    this.formVissibleKeysObject(this.keys);
    this.viewType = this.VIEW_TYPES.COLUMN_VIEW;
    if (this.viewType == this.VIEW_TYPES.COLUMN_VIEW) {
      this.items = this.data.slice(0, 4);
    } else {
      this.items.push(this.data[0]);
    }
  }

}
