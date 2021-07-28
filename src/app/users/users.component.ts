import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Repo } from '../repo';
import { SearchService } from '../search.service';
import { User } from '../user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

   user!:User;
  repos:any;
  repo!:Repo;
  subscription:Subscription = new Subscription;
  git:any;
  


  constructor(public userService:SearchService)  { 

  }
 searchUser(username:any){
 
   }

  ngOnInit(): void {
  
    // this.searchUser('Barrack-coder');
    // this.userService.getUsers();
    this.userService.getUsers();
      this.subscription =  this.userService.getGits()
  .subscribe((response: any) => {
        this.git = response;
        console.log(response);
      });
      
 
  }

  ngOnDestroy()
  {
     this.subscription.unsubscribe();
  }
 

}
