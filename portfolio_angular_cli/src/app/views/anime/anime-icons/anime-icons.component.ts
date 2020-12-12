import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../../services/database/database.service';


@Component({
  selector: 'app-anime-icons',
  templateUrl: './anime-icons.component.html',
  styleUrls: ['./anime-icons.component.css']
})
export class AnimeIconsComponent implements OnInit {

  logos: any = []

  constructor(
    private databaseService: DatabaseService,
  ) { }

  ngOnInit(): void {
    this.databaseService.getLogos().subscribe(response => {
      this.logos = response
      // console.log(this.logos)
    })
  }

  animeInsert(id, anime, time): void {
    console.log('Aplicando classe Rotation')
    document.querySelector(id).classList.add(anime)
    console.log('Aguardando para remover classe')
    setTimeout(function () {
      document.querySelector(id).classList.remove(anime)
      console.log('Classe Rotation Removida')
    }, time);
    return

  }

}
