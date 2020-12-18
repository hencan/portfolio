import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { DatabaseService } from '../../services/database/database.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logos: any = []

  constructor(
    private router: Router,
    private title: Title,
    private databaseService: DatabaseService,
  ) { }

  ngOnInit(): void {
    this.title.setTitle('HenCan | Portfolio');
    this.databaseService.getLogos().subscribe(response => {
      this.logos = response
    })
    if (document.getElementById("navToolbar").classList.contains("showToolbar")) {
      document.getElementById("navToolbar").classList.remove("showToolbar")
      document.getElementById("navToolbar").classList.add("hideToolbar")
    }
  }

  goTo(route: string): void {
    if (route == "") {
      document.getElementById("navToolbar").classList.remove("showToolbar")
      document.getElementById("navToolbar").classList.add("hideToolbar")
      this.router.navigate([route])
      window.scroll({
        top: 0,
        behavior: 'smooth'  // 👈 
      })
    } else {
      document.getElementById("navToolbar").classList.remove("hideToolbar")
      document.getElementById("navToolbar").classList.add("showToolbar")
      this.router.navigate([route])
      window.scroll({
        top: 0,
        behavior: 'smooth'  // 👈 
      })
    }
  }

  
    goTo2(route: string): void {
      this.router.navigate([route])
      window.scrollTo(0, 0)
    }
  


}