import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecordMatchComponent } from './record-match/record-match.component';


const routes: Routes = [
  {  path: '',  component: RecordMatchComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordMatchRoutingModule { }