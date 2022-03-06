import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmwComponent } from './bmw/bmw.component';
import { DonkeyComponent } from './donkey/donkey.component';
import { HomeComponent } from './home/home.component';
import { VolkswagenComponent } from './volkswagen/volkswagen.component';

const routes: Routes = [
  //add route to Homecomponent
  {
    path: '',
    component: HomeComponent,
  },

  //add route to page BMW
  {
    path: 'bmw',
    component: BmwComponent,
  },

  //add route to page VW
  {
    path: 'volks',
    component: VolkswagenComponent,
  },

  //add route to page donkey
  {
    path: 'donkey',
    component: DonkeyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
