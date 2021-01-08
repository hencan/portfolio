import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DomSanitizer } from '@angular/platform-browser';

import { ProjectsService } from '../../services/projects/projects.service'
import { DatabaseService } from '../../services/database/database.service';
import { HighlightsService } from '../../services/highlights/highlights.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0px' })),
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

  dataSource: any  // Objeto de dados do componente

  dataSourceFiltered: any = []

  valueProgress = 0

  listChips: any = []

  selectedChips: any = []

  badge_1: any = 0
  badge_1_disable: any = "false" 

  badge_2: any = 0
  badge_2_disable: any = "true"
  
  expand_icon: any = "chevron_right"


  constructor(
    private router: Router,
    private title: Title,
    private sanitizer: DomSanitizer,
    private pageService: ProjectsService,
    private databaseService: DatabaseService,
    private highlights: HighlightsService,
  ) { }

  // ngAfterViewInit, ngOnInit

  ngOnInit(): void {
    this.title.setTitle('HenCan | Projetos');

    this.highlights.navToolBar(1)

    if (this.pageService.bdLoaded == false) {

      this.pageService.getData.then(() => {
        this.init()
      })
      
      } else {

        this.init()
    }
  }


  init(): void {
    this.dataSource = this.pageService.dataSource // Atualização do banco de dados da planilha
    this.createChipsFilter()
    this.table.dataSource = this.dataSource // Atualização do banco de dados da planilha
    this.dataSource.paginator = this.paginator; // Paginação da planilha
    this.badge_1 = this.dataSource.data.length
    this.valueProgress = 100  
  }

  showFilters(): void {
    this.highlights.showFilters()
    if (this.expand_icon == "chevron_right") {
      this.expand_icon = "expand_more"
    } else {
      this.expand_icon = "chevron_right"
    }
  }


  applyFilter(event: Event) { // Filtro dinamico na tela da tabela
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
          document.querySelector(".filterBtns").classList.remove("mat-chip-selected")
          this.selectAll()
        } else {
          this.selectFilter()
        }
      } else {
        document.activeElement.classList.add("mat-chip-selected")
        document.querySelector(".filterBtns").classList.add("mat-chip-selected")
        this.selectedChips[this.selectedChips.length] = element
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
    this.badge_2 = 0
    this.badge_1_disable = "false" 
    this.badge_2_disable = "true" 
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
    this.badge_2 = this.dataSourceFiltered.data.length
    this.badge_1_disable = "true" 
    this.badge_2_disable = "false" 
  }

}
