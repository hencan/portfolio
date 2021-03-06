import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { DatabaseService } from '../../services/database/database.service'
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedAs: any = this.loginService.loggedAs

  isLogged: any = this.loginService.isLogged

  operation: any = false

  // music: any = new Audio("../../../assets/thunderInstrum_compress.mp3")

  music: any = ""


  constructor(
    private router: Router,
    private loginService: LoginService,
    private databaseService: DatabaseService,
  ) { }

  ngOnInit(): void {
    // window.addEventListener('scroll', (event) => {
    //   this.changeStyleHeader()
    // })
    this.databaseService.getMusic().subscribe(response => {
      this.music = new Audio(response.audio);
    })
  }

  goTo(route: string): void {
    if (route == "") {
      document.getElementById("navToolbar").classList.remove("showToolbar")
      document.getElementById("navToolbar").classList.add("hideToolbar")
      this.router.navigate([route])
      window.scrollTo(0, 0)

      // window.scroll({
      //   top: 0,
      //   behavior: 'smooth' 
      // })
    } else {
      document.getElementById("navToolbar").classList.remove("hideToolbar")
      document.getElementById("navToolbar").classList.add("showToolbar")
      this.router.navigate([route])
      window.scrollTo(0, 0)

      // window.scroll({
      //   top: 0,
      //   behavior: 'smooth'
      // })
    }
  }

  goTo2(route: string): void {
    this.router.navigate([route])
    window.scrollTo(0, 0)
  }

  changeStyleHeader(): void {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      document.getElementById("header").classList.add("bgDark")
    } else {
      document.getElementById("header").classList.remove("bgDark")
    }
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
