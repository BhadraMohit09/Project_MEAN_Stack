//Get All Component
import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Schema } from '../schema';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrl: './get-all.component.css'
})
export class GetAllComponent {

  constructor(private api: ContactService, private actRoute: ActivatedRoute, private router: Router){}

  data: Schema[] = [];

  ngOnInit(){
    this.api.getAll().subscribe((res: any)=>{
      this.data = res;
    });
  }

  delete(id:any){
    this.api.delete(id).subscribe((res:any)=>{
      this.ngOnInit;
    });
  }
}
