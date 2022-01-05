import { Component, OnInit } from '@angular/core';
import { FriendsAndFamily } from '../Models/friends-and-family';

@Component({
  selector: 'app-friendsmodal',
  templateUrl: './friendsmodal.component.html',
  styleUrls: ['./friendsmodal.component.sass']
})
export class FriendsmodalComponent implements OnInit {
  modalData: FriendsAndFamily;
  displayStyle:boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.playSound();
  }
 
  playSound(){
    const audio = new Audio("../../assets/i-did-it-message-tone.mp3");
    audio.play();
  }
  showModal(friend:FriendsAndFamily){
    this.modalData = friend;
    this.displayStyle = true;        
  }

  hideModal(){
    this.displayStyle = false;
  }

}
