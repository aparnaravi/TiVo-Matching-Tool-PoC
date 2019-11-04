import { Component, OnInit } from '@angular/core';
import { GloabalConfig as config } from './config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tivo-poc';

  ngOnInit() {
    config.setConfig(window['uiConfig']);



  }
}
