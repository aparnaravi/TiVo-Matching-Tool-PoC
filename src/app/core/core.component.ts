import { Component, OnInit } from '@angular/core';
import { GloabalConfig as config } from '../config'
@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  hideToolBar: boolean;

  constructor() { }

  ngOnInit() {

    if(config.getToolBarConfig()){
      this.hideToolBar=true;
  }
  }

}
