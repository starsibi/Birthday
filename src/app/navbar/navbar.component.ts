import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { ResponseFileReaderService } from '../_services/response-file-reader.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  title:string;
  userName: string;

  constructor(private authenticationService:AuthenticationService,private responseFileReaderService:ResponseFileReaderService) { }

  ngOnInit(): void {
    this.responseFileReaderService.getJSON("./assets/Appsettings.json").subscribe(data =>{
        this.title = data["AppName"];
        this.userName = data["UserName"];
    });
  }

  logout(){
    this.authenticationService.logout();
  }
}
