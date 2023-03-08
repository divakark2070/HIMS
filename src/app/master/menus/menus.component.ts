import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit{
  formdata: any;
  result: any;
  id = 0;

  constructor(private api: ApiService) { }


  ngOnInit(): void {
    this.load();
  }

  load() {
    this.id = 0;
    this.api.get("menus").subscribe((result: any) => {
      this.result = result.data;
    })
    this.formdata = new FormGroup({
      title:new FormControl("",Validators.compose([Validators.required])),
      canhavechilds:new FormControl("",Validators.compose([Validators.required])),
      menuid:new FormControl("",Validators.compose([Validators.required])),
      srno:new FormControl("",Validators.compose([Validators.required])),
      icon:new FormControl("",Validators.compose([Validators.required])),
      link:new FormControl("",Validators.compose([Validators.required])),
    })
  };

  edit(id: any) {
    this.id = id;
    this.api.get("menus/" + id).subscribe((result: any) => {
      this.formdata = new FormGroup({
        title:new FormControl(result.data.title,Validators.compose([Validators.required])),
        chicanhavechildsld:new FormControl(result.data.child,Validators.compose([Validators.required])),
        menuid:new FormControl(result.data.menuid,Validators.compose([Validators.required])),
        srno:new FormControl(result.data.srno,Validators.compose([Validators.required])),
        icon:new FormControl(result.data.icon,Validators.compose([Validators.required])),
        link:new FormControl(result.data.link,Validators.compose([Validators.required])),
      })
    })
  };

  delete(id: any) {
    swal.fire({
      title: 'Are you sure?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.api.delete("menus/" + id).subscribe((result: any) => {
          this.load()
        })
        swal.fire(
          'Deleted!',

        )
      }
    })


  };

  submit(data: any) {
    if (this.id == 0) {
      this.api.post("menus", data).subscribe((result: any) => {
        this.load();
        swal.fire({
          icon: 'success',
          title: 'Your data has been saved',
          showConfirmButton: false,
          timer: 1500
        })

      })
    }
    else {
      this.api.put("menus/" + this.id, data).subscribe((result: any) => {
        this.load();
        swal.fire({
          icon: 'success',
          title: 'Data updated!',
          showConfirmButton: false,
          timer: 1500
        })

      })
    }
  }

}
