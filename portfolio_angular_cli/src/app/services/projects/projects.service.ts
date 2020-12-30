import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { promise } from 'protractor';
import { DatabaseService } from '../database/database.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  // ******************* Variáveis 👇 *******************

  DATA_SERVICE: any = []

  READ_UPDATE: any = []

  bdLoaded = false

  displayedColumns: string[] = ['imageTitle', 'title'];

  expandedElement: any | null;

  dataSource: any  // Objeto de dados do componente

  dataSourceFiltered: any = []

  valueProgress = 0

  listChips: any = []

  selectedChips: any = []


  // ******************* Variáveis ☝ *******************

  constructor(
    private dbServ: DatabaseService,
    private sanitizer: DomSanitizer,
  ) { }

  createData(a): void {
    this.DATA_SERVICE.unshift(a)
  }

  readData(a): void {
    this.READ_UPDATE = this.DATA_SERVICE[a]
  }

  updateReadData(a): void {
    var temp = []
    temp = this.DATA_SERVICE[a]
    this.READ_UPDATE = JSON.parse(JSON.stringify(temp))
  }

  updateSaveData(a): void {
    this.DATA_SERVICE[a] = this.READ_UPDATE
  }

  deleteData(a): void {
    this.DATA_SERVICE[a].status = "Excluído"
  }

  getData = new Promise((resolve, reject) => {
    this.dbServ.getProjects().subscribe(response => {
      this.DATA_SERVICE = response.projects
      this.bdLoaded = true
      this.dataSource = this.DATA_SERVICE
      this.dataSource = JSON.parse(JSON.stringify(this.dataSource))
      for (var i = 0; i < this.dataSource.length; i++) {
        if (this.dataSource[i].status == "Excluído" || this.dataSource[i].situation == "Rascunho") {
          // delete this.dataSource[i]
          this.dataSource.splice(this.dataSource.indexOf(this.dataSource[i]), 1)
          i = i - 1
        }
      }
      this.dataSource = new MatTableDataSource(this.dataSource)
      // Prevent Default Sanitizer in Content Field
      for (var i = 0; i < this.dataSource.data.length; i++) {
        this.dataSource.data[i].content = this.sanitizer.bypassSecurityTrustHtml(this.dataSource.data[i].content)
      }
      resolve("Concluído")
    })
  })


}
