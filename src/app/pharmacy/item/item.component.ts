import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
  
  
 
  formdata: any;
  parentitems:any;
  result:any
  id=0;
  p:number=0;
  itemsPerPage:number=30;
  items:any;

  constructor(private api:ApiService){}


  ngOnInit(): void {
   
  }
  load() {
    // this.id = 0;
    this.api.get("pharmacy/items").subscribe((result: any) => {
       this.result = result.data;
      //this.items=result.data;
      // console.log(this.items);
      
      
      // this.parentitems = this.result.filter((menu:any, i:number)=>{
      //   if(menu.child === "True"){
      //     return menu;
      //   }
    //   })
    // })
    this.formdata = new FormGroup({
      mtype:new FormControl("",Validators.compose([Validators.required])),
      // canhavechilds:new FormControl(false),
      // menuid:new FormControl(0,Validators.compose([Validators.required])),
      // srno:new FormControl("",Validators.compose([Validators.required])),
      // icon:new FormControl("",Validators.compose([Validators.required])),
      // link:new FormControl("",Validators.compose([Validators.required])),
    })
  });
}

//   edit(id: any) {
//     this.id = id;
//     this.api.get("items/" + id).subscribe((result: any) => {
//       this.formdata = new FormGroup({
//         title:new FormControl(result.data.title,Validators.compose([Validators.required])),
//         canhavechilds:new FormControl(result.data.canhavechilds == 1 ? true : false),
//         menuid:new FormControl(result.data.menuid),
//         srno:new FormControl(result.data.srno,Validators.compose([Validators.required])),
//         icon:new FormControl(result.data.icon),
//         link:new FormControl(result.data.link),
//       })
//     })
//   };
  reset(){
    this.id = 0;
    this.formdata = new FormGroup({
      title:new FormControl("",Validators.compose([Validators.required])),
      canhavechilds:new FormControl(false),
      menuid:new FormControl(0,Validators.compose([Validators.required])),
      srno:new FormControl("",Validators.compose([Validators.required])),
      icon:new FormControl("",Validators.compose([Validators.required])),
      link:new FormControl("",Validators.compose([Validators.required])),
    })
  };
//   delete(id: any) {
//     swal.fire({
//       position:'center',
//       title: 'Are you sure?',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         this.api.delete("items/" + id).subscribe((result: any) => {
//           this.load()
//         })
//         this.toastr.success('Deleted Sccessfully','Menu')
//       }
//       else{
//         this.toastr.error('Something went wrong','Not Deleted')
//       }
//     })


//   };
//   submit(data: any) {
//     console.log(data);
    
//     if (this.id == 0) {
//       this.api.post("items", data).subscribe((result: any) => {
//         this.load();
//         this.toastr.success('Saved Sccessfully','Menu')
// })
//     }
//     else if(this.id!=0){
//       this.api.put("items/" + this.id, data).subscribe((result: any) => {
//         this.load();
//         this.toastr.success('Updated Successfully','Menu')
//  })
//     }
//     else{
//       this.toastr.error('Something went wrong','Not Deleted')
//     };
//   }
}








