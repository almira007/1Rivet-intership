import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  url = ' http://localhost:3000/User';

  constructor(private http: HttpClient) {
   }

   users(){
    return this.http.get(this.url);
   }

   //data push
   saveUsers(data:any){
      return this.http.post<any>(this.url,data);
   }
}
