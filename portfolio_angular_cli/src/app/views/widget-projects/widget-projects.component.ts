import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { WidgetsService } from '../../services/widgets/widgets.service';
import { DatabaseService } from '../../services/database/database.service';

@Component({
  selector: 'app-widget-projects',
  templateUrl: './widget-projects.component.html',
  styleUrls: ['./widget-projects.component.css']
})
export class WidgetProjectsComponent implements OnInit {

  // @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  

  // displayedColumns: string[] = ['imageTitle', 'title'];
  // displayedColumns: string[] = ['imageTitle'];

  projects: any 

  // dataSource: any = new MatTableDataSource(this.widgetsService.LASTEST_PROJECTS_DATA_SERVICE) // Objeto de dados do componente

  valueProgress = 0

  constructor(
    private router: Router,
    private widgetsService: WidgetsService,
    private databaseService: DatabaseService,
  ) { }

  ngOnInit(): void {
    if (this.widgetsService.lastest_projects_Loaded == false) {
      this.databaseService.getLastestProjects().subscribe(response => {
        this.widgetsService.LASTEST_PROJECTS_DATA_SERVICE = response.projects.slice()
        console.log('Banco de dados JSON Projects importado para Widget Service')
        // this.dataSource = new MatTableDataSource(this.widgetsService.LASTEST_PROJECTS_DATA_SERVICE)
        this.widgetsService.lastest_projects_Loaded = true
        console.log('Banco de dados JSON Lastest Projects importado para Widget Component')
        // this.table.dataSource = this.dataSource // Atualização do banco de dados da planilha
        this.valueProgress = 100
        this.projects = this.widgetsService.LASTEST_PROJECTS_DATA_SERVICE
      })
    } else {
      console.log('Utilizando BD do Widget Service')
      // this.table.dataSource = this.dataSource // Atualização do banco de dados da planilha
      this.valueProgress = 100
      this.projects = this.widgetsService.LASTEST_PROJECTS_DATA_SERVICE
    }
  }

  // applyFilter(event: Event) { // Filtro dinamico na tela da tabela
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  buttonRead(element): void {
    console.log('Início dos processos do botão ver')
    this.router.navigate(['projects'])
    console.log(element.title)
    
    console.log('-> Router para página de Dados do Post')
    console.log('Fim do processo do botão ver')
  }

  goTo(route: string): void {
    this.router.navigate([route])
    window.scroll({
      top: 0,
      behavior: 'smooth'  // 👈 
    })
  }


}
