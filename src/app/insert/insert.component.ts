import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { format } from 'path';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrl: './insert.component.css'
})
export class InsertComponent {

  id = -1;
  btn = "Add";
  constructor( private api: ContactService, private actRoute:ActivatedRoute, private router: Router){}
  myForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    image: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
  });

  ngOnInit(){
    if(this.actRoute.snapshot.params['id']!=null){
      this.id = this.actRoute.snapshot.params['id'];
      this.btn = "Edit";
      this.api.getById(this.id).subscribe((res:any)=>{
        this.myForm.controls.id.setValue(res.id);
        this.myForm.controls.name.setValue(res.name);
        this.myForm.controls.image.setValue(res.image);
        this.myForm.controls.email.setValue(res.email);
        this.myForm.controls.phone.setValue(res.phone);
        this.myForm.controls.address.setValue(res.address);
      });
    }
  }

  insert(){
    if(this.id<0){
      this.id = this.actRoute.snapshot.params['id'];
      this.api.insert(this.myForm.value).subscribe((res:any)=>{
        this.router.navigate(['']);
      });
    }else{
      this.api.update(this.id,this.myForm.value).subscribe((res:any)=>{
        this.router.navigate(['']);
      });
    }
  }
}
