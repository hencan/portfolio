import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { DatabaseService } from '../../services/database/database.service';
import { SnackbarService } from '../../services/snackbar/snackbar.service';
import { InfoService } from '../../services/info/info.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  storeData: any = { id: '', bio: '', skills: '', clients: '', services: '', contact: '', situation: '', status: "Ativo", createdBy: '', createdIn: '', modifiedBy: '', modifiedIn: '', date: '', author: '' }

  valueProgress = 0

  constructor(
    private router: Router,
    private databaseService: DatabaseService,
    private title: Title,
    private snackBarService: SnackbarService,
    private infoService: InfoService,
    private sanitizer: DomSanitizer,
  ) {
    // javascript: URLs are dangerous if attacker controlled.
    // Angular sanitizes them in data binding, but you can
    // explicitly tell Angular to trust this value:
    // this.dangerousUrl = 'javascript:alert("Hi there")';
    // this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
  }



  ngOnInit(): void {
    this.title.setTitle('Hencan | Info');
    if (document.getElementById("header").classList.contains("showToolbar") == false) {
      document.getElementById("header").classList.remove("hideToolbar")
      document.getElementById("header").classList.add("showToolbar")
    };

    if (this.infoService.bdLoaded == false) {
      this.databaseService.getInfo().subscribe(response => {
        this.infoService.INFO_DATA_SERVICE = response.profile
        console.log('Banco de dados JSON Info importado para Info Service')
        this.infoService.bdLoaded = true
        console.log('Banco de dados JSON Lastest Info importado para Info Component')
        this.storeData = this.infoService.INFO_DATA_SERVICE
        this.storeData = JSON.parse(JSON.stringify(this.storeData))
        this.storeData.bio = this.sanitizer.bypassSecurityTrustHtml(this.storeData.bio)
        this.storeData.skills = this.sanitizer.bypassSecurityTrustHtml(this.storeData.skills)
        this.storeData.clients = this.sanitizer.bypassSecurityTrustHtml(this.storeData.clients)
        this.storeData.services = this.sanitizer.bypassSecurityTrustHtml(this.storeData.services)
        this.storeData.contact = this.sanitizer.bypassSecurityTrustHtml(this.storeData.contact)
        this.valueProgress = 100
      })
    } else {
      console.log('Utilizando BD do Widget Service')
      this.storeData = this.infoService.INFO_DATA_SERVICE
      this.storeData = JSON.parse(JSON.stringify(this.storeData))
      this.storeData.bio = this.sanitizer.bypassSecurityTrustHtml(this.storeData.bio)
      this.storeData.skills = this.sanitizer.bypassSecurityTrustHtml(this.storeData.skills)
      this.storeData.clients = this.sanitizer.bypassSecurityTrustHtml(this.storeData.clients)
      this.storeData.services = this.sanitizer.bypassSecurityTrustHtml(this.storeData.services)
      this.storeData.contact = this.sanitizer.bypassSecurityTrustHtml(this.storeData.contact)
      this.valueProgress = 100
    }
  }

}
