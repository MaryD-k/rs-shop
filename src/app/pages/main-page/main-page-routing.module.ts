import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  // { path: 'item/:id', component: DetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
