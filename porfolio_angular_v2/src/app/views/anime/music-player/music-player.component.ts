import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../../services/database/database.service';


@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {

  operation: any = false

  // music: any = new Audio("../../../assets/thunderInstrum_compress.mp3")

  music: any = ""

  constructor(
    private databaseService: DatabaseService,
  ) { }

  ngOnInit(): void {
    this.databaseService.getMusic().subscribe(response => {
      this.music = new Audio(response.audio);
    })
  }

  activeMusic(): void {
    if (this.operation == false) {
      document.getElementById('btnMusicOff').style.display = 'none'
      document.getElementById('btnMusicOn').style.display = 'flex'
      var array1 = document.querySelectorAll(".bars")
      // console.log(array1.length)
      for (var i = 0; i < array1.length; i++) {
        array1[i].classList.add("sound")
        array1[i].classList.remove("noSound")
        this.music.loop = true
        this.music.play()
      }
      this.operation = true
    } else {
      document.getElementById('btnMusicOn').style.display = 'none'
      document.getElementById('btnMusicOff').style.display = 'block'
      var array1 = document.querySelectorAll(".bars")
      // console.log(array1.length)
      for (var i = 0; i < array1.length; i++) {
        array1[i].classList.remove("sound")
        array1[i].classList.add("noSound")
        this.music.pause()
      }
      this.operation = false
    }
    console.log("Music: " + this.operation)
  }


}
