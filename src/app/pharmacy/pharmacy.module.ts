import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmacyRoutingModule } from './pharmacy-routing.module';
import { LandingComponent } from './landing.component';
import { ItemsComponent } from './items/items.component';
import { SharedModule } from '../shared/shared.module';
import { ItemComponent } from './item/item.component';


@NgModule({
  declarations: [
    LandingComponent,
    ItemsComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    PharmacyRoutingModule,
    SharedModule
  ]
})
export class PharmacyModule { }
