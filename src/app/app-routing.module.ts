import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from '@core/error-page/error-page.component';

const appRoutes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./pages/main-page/main-page.module').then(m => m.MainPageModule) 
  },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
