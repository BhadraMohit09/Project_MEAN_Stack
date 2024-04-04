import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  appURL = "http://localhost:5001";

  getAll(){
    return this.http.get(this.appURL);
  }

  getById(id: any){
    return this.http.get(this.appURL + '/' + id);
  }

  delete(id: any){
    return this.http.delete(this.appURL + '/' + id);
  }

  insert(form:any){
    return this.http.post(this.appURL, form);
  }

  update(id: any, form: any){
    return this.http.put(this.appURL + '/' + id, form);
  }
}
