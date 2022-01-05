import { Component, OnInit } from '@angular/core';
import { Memories } from '../Models/memories';
import { ResponseFileReaderService } from '../_services/response-file-reader.service';

@Component({
  selector: 'app-memories',
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.sass']
})
export class MemoriesComponent implements OnInit {

  memories: Memories[] = [];
  constructor(private responseFileReaderService: ResponseFileReaderService) { }

  ngOnInit(): void {
    this.responseFileReaderService.getJSON("./assets/Memories.json").subscribe(data => {
      this.memories = data;
    })
    this.playSound();
  }

  playSound(){
    const audio = new Audio("../../assets/i-did-it-message-tone.mp3");
    audio.play();
  }

}
