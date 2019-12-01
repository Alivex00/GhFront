import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
	private userName = 'wregulski';
  
  constructor(private _http:Http) {
    
    
   }
   getUser(){
   	return this._http.get('http://localhost:2809/' + this.userName)
   .map(res => res.json());
   }

   getRepos(){
   	return this._http.get('http://localhost:2809/' + this.userName + '/repos')
   .map(res => res.json());
   }
   getFollowers(){
   	return this._http.get('http://localhost:2809/' + this.userName + '/followers')
   .map(res => res.json());
	}
	updateUser(userName:string){
		this.userName = userName;

   }

}
