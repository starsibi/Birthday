import { Component, OnInit, ViewChild } from '@angular/core';
import { FriendsmodalComponent } from '../friendsmodal/friendsmodal.component';
import { FriendsAndFamily } from '../Models/friends-and-family';
import { ResponseFileReaderService } from '../_services/response-file-reader.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.sass']
})
export class FriendsComponent implements OnInit {

  friendsAndFamily: FriendsAndFamily[] = [];
  @ViewChild(FriendsmodalComponent) friendsmodal:FriendsmodalComponent;

  constructor(private responseFileReaderService:ResponseFileReaderService) { }

  ngOnInit(): void {
    this.responseFileReaderService.getJSON("./assets/FriendsAndFamily.json").subscribe(data=>{
      this.friendsAndFamily = data;
    })
  }

  cardClicked(friend:FriendsAndFamily){    
    this.friendsmodal.showModal(friend);
  }

}
