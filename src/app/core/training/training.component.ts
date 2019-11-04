import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';


@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],


})
export class TrainingComponent implements OnInit {
  pointCount = [1, 2, 3];
  tabData = [{
    'name': 'BasicTraining',
    'value': [
      { 'name': 'MatchingRecords', 'status': 'Complete' },
      { 'name': 'Searching', 'status': 'NotComplete' },
      { 'name': 'NoMatch', 'status': 'NotComplete' },
      { 'name': 'Comparing Records', 'status': 'NotComplete' },
      { 'name': 'Comparing Assignments', 'status': 'NotComplete' },
      { 'name': 'Returning to Assignment', 'status': 'NotComplete' }
    ]
  },
  {
    'name': 'Out of Policy',
    'value': [
      { 'name': 'MatchingRecords', 'status': 'Complete' },
      { 'name': 'Searching', 'status': 'NotComplete' }
    ]
  },
  {
    'name': 'Series Linking',
    'value': [
      { 'name': 'MatchingRecords', 'status': 'Complete' }
    ]
  }
  ]
  constructor() { }

  ngOnInit() {
  }



}
