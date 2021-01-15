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
    var logo = document.getElementById('logo')
    var navs = document.querySelectorAll('mat-toolbar-row.second button')

    
    // Deixa o header transparente somente quando em home e login e deixa o ícone do login com highlight
    if (id == 0) {
      document.getElementById('mat-toolbar-id').classList.add('transparent')
      logo.classList.add('hidden')
    } else if (id == 'login') {
      document.getElementById('mat-toolbar-id').classList.add('transparent')
      login.classList.add('selected')
      logo.classList.add('hidden')
    } else {
      document.getElementById('mat-toolbar-id').classList.remove('transparent')
      login.classList.remove('selected')
      logo.classList.remove('hidden')
    }

    for (var i = 0; i < navs.length; i++) {
      if (i == id) {
        if (i == 0) {
          navs[i].classList.add('selected_color_white')
        } else {
          navs[i].classList.add('selected_color_black')
        }
      } else {
        if (i == 0) {
          navs[i].classList.remove('selected_color_white')
        } else {
          navs[i].classList.remove('selected_color_black')
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
