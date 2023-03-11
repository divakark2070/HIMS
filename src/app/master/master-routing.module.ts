import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { BedsComponent } from './beds/beds.component';
import { BloodgroupsComponent } from './bloodgroups/bloodgroups.component';
import { CategoriesComponent } from './categories/categories.component';
import { ConcessionauthoritiesComponent } from './concessionauthorities/concessionauthorities.component';
import { ConfigurationsComponent } from './configurations/configurations.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DistrictsComponent } from './districts/districts.component';
import { GendersComponent } from './genders/genders.component';
import { IpdoptionsComponent } from './ipdoptions/ipdoptions.component';
import { IpdservicesComponent } from './ipdservices/ipdservices.component';
import { LabsComponent } from './labs/labs.component';
import { LabtestsComponent } from './labtests/labtests.component';
import { LandingComponent } from './landing.component';
import { LanguagesComponent } from './languages/languages.component';
import { MenusComponent } from './menus/menus.component';
import {modulesComponent} from './modules/modules.component';
import { NationalitiesComponent } from './nationalities/nationalities.component';
import { OpdservicesComponent } from './opdservices/opdservices.component';
import { PaymentmodesComponent } from './paymentmodes/paymentmodes.component';
import { RelationsComponent } from './relations/relations.component';
import { ReligionsComponent } from './religions/religions.component';
import { RoomsComponent } from './rooms/rooms.component';
import { SpecializationsComponent } from './specializations/specializations.component';
import { StatesComponent } from './states/states.component';
import { TalukasComponent } from './talukas/talukas.component';
import { TitlesComponent } from './titles/titles.component';
import { UsersComponent } from './users/users.component';
import { UsertypesComponent } from './usertypes/usertypes.component';

const routes: Routes = [
  {path:'', component:LandingComponent, children:[
    // {path:'', component:GendersComponent},
    {path:'genders', component:GendersComponent},
    {path:'states', component:StatesComponent},
    {path:'districts/:stateid', component:DistrictsComponent},
    {path:'talukas/:districtid', component:TalukasComponent},
    {path:'titles', component:TitlesComponent},
    {path:'users', component:UsersComponent},
    {path:'paymentmodes', component:PaymentmodesComponent},
    {path:'modules', component:modulesComponent},
    {path:'menus', component:MenusComponent},
    {path:'beds', component:BedsComponent},
    {path:'bloodgroups', component:BloodgroupsComponent},
    {path:'catogories', component:CategoriesComponent},
    {path:'concessionauthorities', component:ConcessionauthoritiesComponent},
    {path:'configurations', component:ConfigurationsComponent},
    {path:'departments', component:DepartmentsComponent},
    {path:'ipdoptions', component:IpdoptionsComponent},
    {path:'ipdservices', component:IpdservicesComponent},
    {path:'labs', component:LabsComponent},
    {path:'labtests/:labid', component:LabtestsComponent},
    {path:'languages', component:LanguagesComponent},
    {path:'nationalities', component:NationalitiesComponent},
    {path:'opdservices', component:OpdservicesComponent},
    {path:'relations', component:RelationsComponent},
    {path:'religions', component:ReligionsComponent},
    {path:'rooms', component:RoomsComponent},
    {path:'specializations', component:SpecializationsComponent},
    {path:'usertypes', component:UsertypesComponent},    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)
],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
