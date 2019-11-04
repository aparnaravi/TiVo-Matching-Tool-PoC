import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbs =[{
    "title": "Record Match",
    "selected": false,
    "color": "grey",
    "navigateUrl": "/"
  },{
    "title": "Record 17823458",
    "selected": true,
    "color": "yellow",
    "navigateUrl": "/"
  }]

  constructor() { }

  ngOnInit() {
  }

}
