import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  
  {
    path: 'dashboard',
    loadChildren: '@modules/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: '',
    redirectTo:'/dashboard',
    pathMatch:'full'
  },
  {
    path: 'detail',
    loadChildren: '@modules/detail/detail.module#DetailModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
