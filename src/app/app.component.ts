import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title:string;
  
  isLoggedIn$: Observable<boolean>;
  constructor(private authservice: AuthenticationService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authservice.isLoggedIn;    
  }

  onLogout(): void{
    this.authservice.logout();
  }
}
