import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { RecordMatchComponent } from './record-match/record-match.component';
import { RecordMatchRoutingModule } from './recordMatch.routing.module';
import { BreadcrumbComponent } from './record-match/breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
  RecordMatchComponent,
  BreadcrumbComponent
],
  imports: [
    CommonModule,
    MaterialModule,
    RecordMatchRoutingModule
  ],
  providers:[
  ],
  exports: [
    // RecordMatchComponent,
    // BreadcrumbComponent
  ]
})
export class RecordMatchModule { }
