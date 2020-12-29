import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DomSanitizer } from '@angular/platform-browser';

import { ProjectsService } from '../../services/projects/projects.service';
import { DatabaseService } from '../../services/database/database.service';
import { HighlightsService } from '../../services/highlights/highlights.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

// OnInit, AfterViewInit

export class ProjectsComponent implements OnInit {

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedColumns: string[] = ['imageTitle', 'title'];

  expandedElement: any | null;

  // dataSource: any = new MatTableDataSource(this.projectsService.PROJECTS_DATA_SERVICE) // Objeto de dados do componente
  dataSource: any  // Objeto de dados do componente

  dataSourceFiltered: any = []

  valueProgress = 0

  listChips: any = []

  selectedChips: any = []

  constructor(
    private router: Router,
    private title: Title,
    private sanitizer: DomSanitizer,
    private projectsService: ProjectsService,
    private databaseService: DatabaseService,
    private highlightsService: HighlightsService,
  ) { }

  // ngAfterViewInit, ngOnInit

  ngOnInit(): void {
    this.title.setTitle('HenCan | Projetos');

    this.highlightsService.navToolBar(1)

    if (this.projectsService.bdLoaded == false) {
      this.databaseService.getProjects().subscribe(response => {
        this.projectsService.PROJECTS_DATA_SERVICE = response.projects.slice()
        this.projectsService.bdLoaded = true
        console.log('Banco de dados JSON Services importado para Services Service')
        this.dataSource = this.projectsService.PROJECTS_DATA_SERVICE
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
        console.log('Banco de dados JSON Services importado para Services Component')
        this.createChipsFilter()
        this.table.dataSource = this.dataSource // Atualização do banco de dados da planilha
        this.dataSource.paginator = this.paginator; // Paginação da planilha
        document.getElementById('countItensFiltersProjects').innerHTML = "Total: " + this.dataSource.data.length + " itens"
        this.valueProgress = 100
      })
    } else {
      console.log('Banco de dados JSON Services importado para Services Service')
      this.dataSource = this.projectsService.PROJECTS_DATA_SERVICE
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
      console.log('Banco de dados JSON Services importado para Services Component')
      this.createChipsFilter()
      this.table.dataSource = this.dataSource // Atualização do banco de dados da planilha
      this.dataSource.paginator = this.paginator; // Paginação da planilha
      document.getElementById('countItensFiltersProjects').innerHTML = "Total: " + this.dataSource.data.length + " itens"
      this.valueProgress = 100
    }
  }

  applyFilter(event: Event) { // filterBtnProjects dinamico na tela da tabela
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showFilters(): void {
    console.log('ShowFilters Functions')
    if (document.getElementById("filtersProjects").style.display == "flex") {
      document.getElementById("filtersProjects").style.display = "none"
    } else {
      document.getElementById("filtersProjects").style.display = "flex"
    }
  }

  createChipsFilter(): void {
    for (var i = 0; i < this.dataSource.data.length; i++) {
      for (var j = 0; j < this.dataSource.data[i].categories.length; j++) {
        this.listChips.push(this.dataSource.data[i].categories[j])
      }
    }
    this.listChips = JSON.parse(JSON.stringify(this.listChips))
    this.listChips.sort()
    var unique = new Set(this.listChips);
    this.listChips = [...unique]
  }

  selectChips(element): void {
    // console.log(document.activeElement)
    this.valueProgress = 0

    if (element == 'Todos') {
      this.selectAll()
      var resetSelected = document.querySelectorAll('mat-chip')
      resetSelected[0].classList.add("mat-chip-selected")
      for (var h = 1; h < resetSelected.length; h++) {
        resetSelected[h].classList.remove("mat-chip-selected")
      }
    } else {
      document.querySelector('mat-chip').classList.remove("mat-chip-selected")
      if (this.selectedChips.includes(element)) {
        this.selectedChips.splice(this.selectedChips.indexOf(element), 1)
        document.activeElement.classList.remove("mat-chip-selected")
        if (this.selectedChips.length == 0) {
          document.querySelector('mat-chip').classList.add("mat-chip-selected")
          document.getElementById("filterBtnProjects").classList.remove("mat-chip-selected")
          this.selectAll()
        } else {
          this.selectFilter()
        }
      } else {
        document.activeElement.classList.add("mat-chip-selected")
        document.getElementById("filterBtnProjects").classList.add("mat-chip-selected")
        this.selectedChips[this.selectedChips.length] = element
        console.log(this.selectedChips.length)
        console.log(this.listChips.length)
        if (this.selectedChips.length == this.listChips.length) {
          this.selectAll()
          var resetSelected = document.querySelectorAll('mat-chip')
          resetSelected[0].classList.add("mat-chip-selected")
          for (var h = 1; h < resetSelected.length; h++) {
            resetSelected[h].classList.remove("mat-chip-selected")
          }    
        } else {
          this.selectFilter()
        }
      }
    }
    this.valueProgress = 100
  }

  selectAll(): void {
    this.table.dataSource = this.dataSource // Atualização do banco de dados da planilha
    this.dataSource.paginator = this.paginator; // Paginação da planilha
    this.selectedChips = []
    this.dataSourceFiltered = []
    document.getElementById('countItensFiltersProjects').innerHTML = "Total: " + this.dataSource.data.length + " itens"
  }

  selectFilter(): void {
    this.dataSourceFiltered = []
    for (var i = 0; i < this.dataSource.data.length; i++) {
      for (var j = 0; j < this.selectedChips.length; j++) {
        if (this.dataSource.data[i].categories.includes(this.selectedChips[j])) {
          this.dataSourceFiltered.push(this.dataSource.data[i])
          j = this.selectedChips.length
        }
      }
    }
    this.dataSourceFiltered = new MatTableDataSource(this.dataSourceFiltered)
    this.table.dataSource = this.dataSourceFiltered // Atualização do banco de dados da planilha
    this.dataSourceFiltered.paginator = this.paginator; // Paginação da planilha
    document.getElementById('countItensFiltersProjects').innerHTML = "Filtro: " + this.dataSourceFiltered.data.length + " de " + this.dataSource.data.length + " itens"
  }

}
