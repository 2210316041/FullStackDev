import { Param } from './param';
import { HttpClient,HttpParams } from '@angular/common/http';
import { User } from './User.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
url="http://jsonplaceholder.typicode.com/users";
url1="https://jsonplaceholder.typicode.com/posts?userId=1";
  constructor(private http:HttpClient)
  {
    
  }
  getuser()
  {
    return this.http.get<User[]>(this.url);
  }
  getuser1()
  {
    let p=new HttpParams().set('userId','1');
    return this.http.get<Param[]>(this.url1,{params:p});
  }
 
}
