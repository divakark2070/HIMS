import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

const routes: Routes = [
  {path:'', component:LoginComponent, pathMatch:'full'},
  {path:'demo',component:SidebarComponent},
  {path:'general', loadChildren:()=>import('./general/general.module').then(m=>m.GeneralModule)},
  {path:'master', loadChildren:()=>import('./master/master.module').then(m=>m.MasterModule)}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
