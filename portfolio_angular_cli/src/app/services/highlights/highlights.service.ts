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

    var login = document.getElementById('buttonLogin').children

    var navs = document.querySelectorAll('.navToolbar a')

    if (id == 'login') {
      login[0].classList.add('selected')
      login[1].classList.add('selected')
    } else {
      login[0].classList.remove('selected')
      login[1].classList.remove('selected')
    }
    
    for (var i = 0; i < navs.length; i++) {
      if (i == id) {
        var iconHiglight = navs[i].children
        iconHiglight[0].classList.add('selected')
        iconHiglight[1].classList.add('selected')    
      } else {
        var iconHiglight = navs[i].children
        if (iconHiglight[0].classList.contains('selected')) {
          iconHiglight[0].classList.remove('selected')
          iconHiglight[1].classList.remove('selected')      
        }
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
