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

  logo: any

  header_div: any = document.getElementById("header")

  constructor(
    private router: Router,
    private loginService: LoginService,
    private databaseService: DatabaseService,
  ) { }

  ngOnInit(): void {
    this.databaseService.getLogos().subscribe(response => {
      this.logo = response.logo
    })

    // window.addEventListener('scroll', (event) => {
    //   this.changeStyleHeader()
    // })
  }

  goTo(route: string): void {
    if (route == "") {
      this.router.navigate([route])
      window.scrollTo(0, 0)

      // window.scroll({
      //   top: 0,
      //   behavior: 'smooth' 
      // })
    } else {
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
    if (typeof this.header_div != "undefined") {
      if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        this.header_div.classList.add("bgDark")
      } else {
        this.header_div.classList.remove("bgDark")
      }
    }
  }

}
