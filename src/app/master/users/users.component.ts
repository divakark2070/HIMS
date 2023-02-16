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

  load(){
    this.id = 0;
    this.api.get("users").subscribe((result:any)=>{
   
      
      this.result = result.data;
    })
    this.formdata= new FormGroup({
      name:new FormControl("",Validators.compose([Validators.required])),
      username:new FormControl("",Validators.compose([Validators.required])),
      password:new FormControl("",Validators.compose([Validators.required])),

    })
  }

  edit(id:any){
    this.id = id;
    this.api.get("users/" +id).subscribe((result:any)=>{
      this.formdata= new FormGroup({
        name:new FormControl(result.data.name,Validators.compose([Validators.required])),
        username:new FormControl(result.data.username,Validators.compose([Validators.required])),
        password:new FormControl(result.data.password,Validators.compose([Validators.required])),
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
            });
            };
          })

    // .then((result) => {
    //   /* Read more about isConfirmed, isDenied below */
    //   if (result.isConfirmed) {
        
    //     swal.fire('Saved!', '', 'success')
    //   } else if (result.isDenied) {
    //     swal.fire('Changes are not saved', '', 'info')
    //   }
    // })

    // swal.fire('Are you sure to delete it ?').then((result: { isConfirmed: any; }) => {
    //     if (result.isConfirmed) {
    //       this.api.delete("users/" + id).subscribe((result:any)=>{
    //         this.load()
    //       });
    //       };
    //     })
        
    
  
    
    // swal.fire({
    //   title: 'Are you sure?',
    //   text: "You won't be able to revert this!",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, delete it!'
    // }).then((result: { isConfirmed: any; }) => {
    //   if (result.isConfirmed) {
    //     this.api.delete("users/" + id).subscribe((result:any)=>{
    //       this.load()
    //     })
    //     swal.fire(
    //       'Deleted!',
    //       'Your file has been deleted.',
    //       'success'
    //     )
    //   }
    // })
      
    
  }

  submit(data:any){
    if(this.id==0){
    this.api.post("users", data).subscribe((result:any)=>{
      this.load();
      
    })
    }
    else{
      this.api.put("users/" + this.id, data).subscribe((result:any)=>{
        this.load();
        
      })
    }
  }


}
