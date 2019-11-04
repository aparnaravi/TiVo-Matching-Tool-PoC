import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InboxService {

  selectedInboxConfig = {
    "fields": "",
    "columnDefs": [
      {
        "field": "Flag",
        "displayName": "",
        "dataType": '',
        "isSortable": false,
        "isLink": "false",
        "propertyId": "0",
        "enableSorting": false
      },
      {
        "field": "User",
        "displayName": "User",
        "dataType": 'STRING',
        "isSortable": true,
        "isLink": "true",
        "propertyId": "1",
        "enableSorting": true
      },
      {
        "field": "Team",
        "displayName": "Team",
        "dataType": 'STRING',
        "isSortable": true,
        "isLink": "true",
        "propertyId": "2",
        "enableSorting": true
      },
      {
        "field": "Status",
        "displayName": "Status",
        "dataType": 'STRING',
        "isSortable": true,
        "isLink": "",
        "propertyId": "3",
        "enableSorting": true
      },
      {
        "field": "Action",
        "displayName": "Action",
        "dataType": 'STRING',
        "isSortable": true,
        "isLink": "",
        "propertyId": "4",
        "enableSorting": true
      },
      {
        "field": "Type",
        "displayName": "Type",
        "dataType": 'STRING',
        "isSortable": true,
        "isLink": "",
        "propertyId": "5",
        "enableSorting": true
      },
      {
        "field": "LastActivity",
        "displayName": "Last Activity",
        "dataType": 'DATE',
        "isSortable": true,
        "isLink": "",
        "propertyId": "6",
        "enableSorting": true
      },
      {
        "field": "RecordID",
        "displayName": "Record ID",
        "dataType": 'NUMBER',
        "isSortable": true,
        "isLink": "true",
        "propertyId": "7",
        "enableSorting": true
      },
      {
        "field": "CreatedDate",
        "displayName": "Created Date",
        "dataType": 'DATE',
        "isSortable": true,
        "isLink": "",
        "propertyId": "8",
        "enableSorting": true
      }
    ]
  }
  data = [


    {
      "User": "Angel Merced",
      "Team": "Superuser",
      "Status": "Matched",
      "Action": "--",
      "Type": "Movie",
      "LastActivity": "Today 2:05 pm",
      "RecordID": 5646909,
      "CreatedDate": "12/05/2004",
      "IsFlagged": false

    },
    {
      "User": "Dave Matthews",
      "Team": "Internal",
      "Status": "Reported",
      "Action": "NEI",
      "Type": "Episode",
      "LastActivity": "Today 1:05 pm",
      "RecordID": 4675945,
      "CreatedDate": "11/05/2004",
      "IsFlagged": true
    },
    {
      "User": "Richard Guy",
      "Team": "Freelance",
      "Status": "Unverified",
      "Action": "Verify Match",
      "Type": "Movie",
      "LastActivity": "Today 1:05 pm",
      "RecordID": 4244578,
      "CreatedDate": "13/05/2004",
      "IsFlagged": false,
      "VerificationNeeded": true

    },
    {
      "User": "Claudia Cardenuto",
      "Team": "Superuser",
      "Status": "Unverified",
      "Action": "Verify Match",
      "Type": "Movie",
      "LastActivity": "Today 1:05 pm",
      "RecordID": 3345676,
      "CreatedDate": "12/05/2004",
      "IsFlagged": false,
      "VerificationNeeded": true


    },
     {
      "User": "Hailey Wickiser",
      "Team": "Freelance",
      "Status": "",
      "Action": "Create RFP",
      "Type": "Movie",
      "LastActivity": "Today 1:05 pm",
      "RecordID": 3283709,
      "CreatedDate": "12/05/2004",
      "IsFlagged": false


    }, {
      "User": "Angel Merced",
      "Team": "Superuser",
      "Status": "Matched",
      "Action": "--",
      "Type": "Movie",
      "LastActivity": "Today 1:05 pm",
      "RecordID": 2392098,
      "CreatedDate": "12/05/2004",
      "IsFlagged": true


    },
     {
      "User": "Richard Guy",
      "Team": "Freelance",
      "Status": "Matched",
      "Action": "--",
      "Type": "TVseries",
      "LastActivity": "Today 1:55 pm",
      "RecordID": 3456712,
      "CreatedDate": "12/05/2004",
      "IsFlagged": true


    },
    {
      "User": "Claudia Cardenuto",
      "Team": "Superuser",
      "Status": "Accepted",
      "Action": "--",
      "Type": "TVseries",
      "LastActivity": "Today 3:05 pm",
      "RecordID":3146362,
      "CreatedDate": "12/05/2004",
      "IsFlagged": false


    },
    {
      "User": "Hailey Wickiser",
      "Team": "Freelance",
      "Status": "Matched",
      "Action": "--",
      "Type": "TVseries",
      "LastActivity": "Today 1:25 pm",
      "RecordID": 3489012,
      "CreatedDate": "12/05/2004",
      "IsFlagged": false


    }, {
      "User": "Dave Matthews",
      "Team": "Internal",
      "Status": "Reported",
      "Action": "OOP",
      "Type": "Episode",
      "LastActivity": "Today 4:05 pm",
      "RecordID": 3675945,
      "CreatedDate": "12/05/2004",
      "IsFlagged": true


    },
     {
      "User": "Richard Guy",
      "Team": "Freelance",
      "Status": "Matched",
      "Action": "--",
      "Type": "TVseries",
      "LastActivity": "Today 1:35 pm",
      "RecordID": 3875945,
      "CreatedDate": "12/05/2004",
      "IsFlagged": true


    }
  ];

  constructor() { }

}


