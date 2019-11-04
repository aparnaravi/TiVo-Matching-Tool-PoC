import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'app', loadChildren: './core/core.module#CoreModule' },
  {
    path: '',
    redirectTo: '/app/blackstar/login',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/app/blackstar/login' }
];

@NgModule({
  imports: [RouterModule.forChild(routes),  RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
