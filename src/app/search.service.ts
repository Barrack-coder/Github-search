
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';
import { Repo } from './repo';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  user!:User;
  repos!:Repo;
  git=new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { 
    this.user = new User("",0,0,0,"","","");
    this.repos = new Repo("","","","",new Date());
  }

   
     getUsers()
  {
    return this.http.get(`https://api.github.com/users/Barrack-coder?access_token=${environment.AccessToken}`)
      .subscribe((response: any)=>{
        this.git.next(response);
        console.log('response');
      });
  }

   getGits()
  {
    return this.git.asObservable();
  }
  // getProfile(username:string){
  //   interface ApiResponse{
  //       name:string;
  //       login: string;
  //       url:string
  //       avatar_url:string;
  //       followers:number;
  //       following:number;
  //       public_repos:number;
  //   }
    //  https://api.github.com/users/${gifName}?access_token=${environment.access_token}
  


 
    // let promise = new Promise<void>((resolve,reject) =>{
    //   this.http.get<ApiResponse>(`https://api.github.com/users/Barrack-coder?access_token=${environment.AccessToken}`).toPromise().then
    //   (response => {
    //     this.user = response;
    //     console.log(response);

    //     resolve()
    //   },
    //   error=>{
    //     this.user.name = "We couldn’t find any users matching the name given"

    //     reject(error)
    //     })
    //   })
    //   return promise;
    // }

    // getRepo(username:string){
    //   interface ApiResponse{
    //     name:string;
    //     html_url:string;
    //     description:string;
    //     language:string;
    //     created_at:Date
        
    //   }
      
    //   let repoUrl = 'https://api.github.com/users/'+username+'/repos?order=created&sort=asc?client_id='+environment.AccessToken;
    //   let promise = new Promise<void>((resolve,reject) =>{
    //     this.http.get<ApiResponse>(repoUrl).toPromise().then
    //     (response => {
    //         this.repos = response;
    //         console.log(this.repos);
    //       resolve()
    //     },
    //     error=>{
    //       this.repos.name = "We couldn’t find any repositories matching the name given"
  
    //       reject(error)
    //       })
    //     })
    //     return promise;

    // }
  
}


