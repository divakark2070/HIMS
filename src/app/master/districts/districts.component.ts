import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.css']
})
export class DistrictsComponent implements OnInit{
  formdata:any;
  result:any;
  id = 0;
  stateid:any;


  constructor(private api:ApiService ,private route:ActivatedRoute ,private router:Router){
   
  }

  ngOnInit(): void {

    this.stateid=this.route.snapshot.params["stateid"];
   this.load();

    
  }

  load(){
    this.id = 0;
    this.api.get("districts/"+this.stateid).subscribe((res:any)=>{
      this.result = res.data;
    })
   
    this.formdata= new FormGroup({
      name:new FormControl("",Validators.compose([Validators.required])),
      stateid:new FormControl(this.stateid,Validators.compose([Validators.required])),

    })
  }

  edit(id:any){    
    this.id = id;
    this.api.get("districts/" +this.stateid+"/"+id).subscribe((result:any)=>{
      // console.log(result);
      
      this.formdata= new FormGroup({
        name:new FormControl(result.data.name,Validators.compose([Validators.required])),
        stateid:new FormControl(this.stateid,Validators.compose([Validators.required]))
      })
    })
  }

  delete(id:any){
    swal.fire({
      title: 'Are you sure?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.api.delete("districts/" + id).subscribe((result:any)=>{
          this.load()
        })
        swal.fire(
          'Deleted!',
         
        )
      }
    })
      
    
  }

  submit(data:any){
console.log(data);

    if(this.id==0){
    this.api.post("districts" ,data).subscribe((result:any)=>{  
      this.load();
      swal.fire({
        icon: 'success',
        title: 'Your data has been saved',
        showConfirmButton: false,
        timer: 1500


      })
      
    })
    }
    else{
      this.api.put("districts/"+this.id, data).subscribe((result:any)=>{
        console.log(result);
        
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
