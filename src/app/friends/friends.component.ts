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
  audio:any = new Audio("../../assets/A R Rahman.mp3");
  friendsAndFamily: FriendsAndFamily[] = [];
  @ViewChild(FriendsmodalComponent) friendsmodal:FriendsmodalComponent;

  constructor(private responseFileReaderService:ResponseFileReaderService) { }

  ngOnInit(): void {
    this.playSound();
    this.responseFileReaderService.getJSON("./assets/FriendsAndFamily.json").subscribe(data=>{
      this.friendsAndFamily = data;
    })
  }

  playSound(){    
    this.audio.play();
  }

  ngOnDestroy() {
    // destroy audio here
    if(this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }
  cardClicked(friend:FriendsAndFamily){    
    this.friendsmodal.showModal(friend);
  }

}
