import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HighlightsService {


  constructor() { }

  navToolBar(id): void {
    // if (document.getElementById("navToolbar").classList.contains("showToolbar") == false) {
    //   document.getElementById("navToolbar").classList.remove("hideToolbar")
    //   document.getElementById("navToolbar").classList.add("showToolbar")
    // }

    var login = document.getElementById('buttonLogin')

    var navs = document.querySelectorAll('mat-toolbar-row.second button')

    if (id == 'login') {
      login.classList.add('selected')
      // login[1].classList.add('selected')
    } else {
      login.classList.remove('selected')
      // login[1].classList.remove('selected')
    }

    if (id == 0) {
      document.getElementById('mat-toolbar-id').classList.add('transparent')
    } else {
      document.getElementById('mat-toolbar-id').classList.remove('transparent')
    }

    for (var i = 0; i < navs.length; i++) {
      if (i == id) {
        // var iconHiglight = navs[i].children
        // iconHiglight[0].classList.add('selected')
        // iconHiglight[1].classList.add('selected')
        navs[i].classList.add('selected')
      } else {
        navs[i].classList.remove('selected')
        // var iconHiglight = navs[i].children
        // if (iconHiglight[0].classList.contains('selected')) {
        //   iconHiglight[0].classList.remove('selected')
        //   iconHiglight[1].classList.remove('selected')      
        // }
      }
    }
  }

  showFilters(): void {
    if (document.querySelector(".filtersItems").classList.contains('fiShow')) {
      document.querySelector(".filtersItems").classList.remove('fiShow')
      document.querySelector(".filtersItems").classList.add('fiHide')
    } else {
      document.querySelector(".filtersItems").classList.remove('fiHide')
      document.querySelector(".filtersItems").classList.add('fiShow')
    }
  }

}
