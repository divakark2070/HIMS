import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { ItemsComponent } from './items/items.component';
import { LandingComponent } from './landing.component';

const routes: Routes = [
  {path:'', component:LandingComponent, children:[
    {path:'items',component:ItemsComponent},
    {path:'item',component:ItemComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacyRoutingModule { }
