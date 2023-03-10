import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  formdata:any;
  result:any;
  id = 0;

  constructor(private api:ApiService){}


  ngOnInit(): void {
   this.load();
  }
  cancel(){
   this.load();
  }

  load(){
    this.id = 0;
    this.api.get("users").subscribe((result:any)=>{


      this.result = result.data;
    })
    this.formdata= new FormGroup({
      name:new FormControl("",Validators.compose([Validators.required])),
      username:new FormControl("",Validators.compose([Validators.required])),
      password:new FormControl("",Validators.compose([Validators.required])),
      mobileno:new FormControl("",Validators.compose([Validators.required])),
      email:new FormControl("",Validators.compose([Validators.required])),

    })
  }

  edit(id:any){
    this.id = id;
    console.log(this.result)
    this.api.get("users/" +id).subscribe((result:any)=>{
      this.formdata= new FormGroup({
        name:new FormControl(result.data.name,Validators.compose([Validators.required])),
        username:new FormControl(result.data.username,Validators.compose([Validators.required])),
        password:new FormControl(result.data.password,Validators.compose([Validators.required])),
        mobileno:new FormControl(result.data.mobileno,Validators.compose([Validators.required])),
        email:new FormControl(result.data.email,Validators.compose([Validators.required])),
      })
    })
  }

  delete(id:any){
    swal.fire({
      title: 'Do you want to delete it ?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Delete',

    }).then((result: { isConfirmed: any; }) => {
          if (result.isConfirmed) {
            this.api.delete("users/" + id).subscribe((result:any)=>{
              this.load()
              swal.fire({
                icon: 'success',
                title: 'Data Deleted!',
                showConfirmButton: false,
                timer: 1500
              })
            });
            };
          })

  }

  submit(data:any){
    if(this.id==0){
      swal.fire({
        icon: 'success',
        title: 'Your data has been saved',
        showConfirmButton: false,
        timer: 500
      })
    this.api.post("users", data).subscribe((result:any)=>{
      this.load();

    })
    }
    else{
      this.api.put("users/" + this.id, data).subscribe((result:any)=>{
        this.load();
        swal.fire({
          icon: 'success',
          title: ' Data updated',
          showConfirmButton: false,
          timer: 500
        })

      })
    }
  }


}
