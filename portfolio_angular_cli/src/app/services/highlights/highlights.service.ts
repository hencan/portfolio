import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HighlightsService {

  constructor() { }

  navToolBar(id): void {
    if (document.getElementById("navToolbar").classList.contains("showToolbar") == false) {
      document.getElementById("navToolbar").classList.remove("hideToolbar")
      document.getElementById("navToolbar").classList.add("showToolbar")
    }

    var navs = document.querySelectorAll('.navToolbar a')
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
}
