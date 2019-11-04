import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialogRef, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { SearchTableServiceService } from './search-table-service.service';
import { SelectedRowEventService } from './selected-row-event.service';
import { NotificationService } from './../shared/services/notification.service';


@Component({
  selector: 'app-search-result-table',
  templateUrl: './search-result-table.component.html',
  styleUrls: ['./search-result-table.component.scss']
})
export class SearchResultTableComponent implements OnInit {
  displayedColumns = [];
  inboxColumnConfig: any[];
  selectedRows: any[] = [];
  selectedInboxConfig: any;
  DATATYPES = {
    'STRING': 'STRING',
    'DATE': 'DATE',
    'LINK': 'LINK',
    'NUMBER': 'NUMBER',
    'BOOLEAN': 'BOOLEAN'
  };
  defaultSort = {
    "name": "Match Score",
    "sortType": "desc"
  }
  @Output() selectedTableData = new EventEmitter<any[]>();

  serachResultData = new MatTableDataSource<any>([]);
  totalNoOfInboxData = 0;
  pageObj = {
    pageIndex: 0,
    pageSize: 10
  };
  selection = new SelectionModel<any>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private searchTableServiceService: SearchTableServiceService,
    public searchResultTableComponent: MatDialogRef<SearchResultTableComponent>,
    public dialog: MatDialog,
    public selectedRowEventService: SelectedRowEventService,
    private notificationService: NotificationService

  ) {


  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.serachResultData.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.serachResultData.data.forEach(row => this.selection.select(row));
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
            return item.Cosmo != selectionData.removed[i].Cosmo;
          });
        }
      }
    }
  }
  compareSelectedRecords() {
    if (this.selectedRows.length > 0) {
      this.selectedRowEventService.getSelectedRecords(this.selectedRows);
      this.searchResultTableComponent.close();
      this.searchResultTableComponent.close("false");
    }
    else {
      this.notificationService.showSnackNotification("Select atleast one record to compare")
    }


  }
  getProperty = (obj, path) => (

    obj[path]
  )
  getObjProperty = (obj, path) => (
    obj[path].value
  )
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
  initalizeInbox() {
    this.serachResultData.data = this.searchTableServiceService.displayData;
    this.totalNoOfInboxData = this.serachResultData.data.length;
    this.serachResultData.filter = "";
    this.selection = new SelectionModel<any>(true, []);
    this.selection.onChange.subscribe(
      data => {
        this.selectionHandler(data);
      }
    );
    this.serachResultData.paginator = this.paginator;
    this.serachResultData.sort = this.sort;
  }

  ngOnInit() {
    this.selectedInboxConfig = this.searchTableServiceService.selectedInboxConfig;
    this.prepareInboxFields();
    this.initalizeInbox();
  }
  close() {
    this.searchResultTableComponent.close();
    this.searchResultTableComponent.close("false");
  }
  goBack() {
    this.searchResultTableComponent.close();
    this.searchResultTableComponent.close("true");
  }
}

