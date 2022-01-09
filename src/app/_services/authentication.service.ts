import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ResponseFileReaderService } from './response-file-reader.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private validUserName:string;
  private validPassword:string;

  get isLoggedIn(){    
    return this.loggedIn.asObservable();
  }

  constructor(private router:Router,private responseFileReaderService:ResponseFileReaderService) { 
    this.getusernameandpasswordfromconfig()
  }

  login(username:string, password:string){    
    if(username.toLowerCase() == this.validUserName.toLowerCase() && password.toLowerCase() == this.validPassword.toLowerCase()){
      this.loggedIn.next(true);      
      this.router.navigate(["/"]);
    }
  }

  getusernameandpasswordfromconfig(){
    this.responseFileReaderService.getJSON("./assets/Appsettings.json").subscribe(data=>{
      this.validUserName = data["UserName"];
      this.validPassword = data["Password"];
    });
  }

  logout(){
    this.loggedIn.next(false);
    this.router.navigate(["/login"]);
  }
}
