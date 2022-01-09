import { Component, OnInit } from '@angular/core';
import { Memories } from '../Models/memories';
import { ResponseFileReaderService } from '../_services/response-file-reader.service';

@Component({
  selector: 'app-memories',
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.sass']
})
export class MemoriesComponent implements OnInit {
  audio:any = new Audio("../../assets/VTV.mp3");
  memories: Memories[] = [];
  constructor(private responseFileReaderService: ResponseFileReaderService) { }

  ngOnInit(): void {
    this.responseFileReaderService.getJSON("./assets/Memories.json").subscribe(data => {
      this.memories = data;
    })
    this.playSound();
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
}
