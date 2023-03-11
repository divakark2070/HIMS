import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menus: any;
  parentMenus:any;

  constructor(private api: ApiService) { }

  
  ngOnInit(): void {
    this.api.get("menus/").subscribe((result: any) => {
      this.menus = result.data;
      this.parentMenus = this.menus.filter((menu:any, i:number)=>{
        if(menu.child === "True"){
          return menu;
        }
      })
    })
  }

}
