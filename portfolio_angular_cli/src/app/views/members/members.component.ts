import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { MembersService } from '../../services/members/members.service'
import { DatabaseService } from '../../services/database/database.service'


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class MembersComponent implements OnInit {

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedColumns: string[] = ['photo', 'fname', 'details'];

  expandedElement: any | null;

  dataSource: any = new MatTableDataSource(this.membersService.MEMBERS_DATA_SERVICE) // Objeto de dados do componente

  // valueProgress = 0

  constructor(
    private title: Title,
    private membersService: MembersService,
    private databaseService: DatabaseService,
  ) { };

  ngOnInit(): void {
    this.title.setTitle('HenCan | Membros');
    if (document.getElementById("header").classList.contains("showToolbar") == false) {
      document.getElementById("header").classList.remove("hideToolbar")
      document.getElementById("header").classList.add("showToolbar")
    }
    if (this.membersService.bdLoaded == false) {
      this.databaseService.getUsers().subscribe(response => {
        this.membersService.MEMBERS_DATA_SERVICE = response.users.slice()
        for (let i = 0; i < this.membersService.MEMBERS_DATA_SERVICE.length; i++) {
          this.membersService.MEMBERS_DATA_SERVICE[0].password = "acesso restrito"
        }
        console.log("Realizado segurança nos dados")
        console.log('Banco de dados JSON Users importado para Members Service')
        this.dataSource = new MatTableDataSource(this.membersService.MEMBERS_DATA_SERVICE)
        this.membersService.bdLoaded = true
        console.log('Banco de dados JSON Users importado para Members Component')
        this.table.dataSource = this.dataSource // Atualização do banco de dados da planilha
        this.applyFilterOnInitTable() // Aplicação do filtro inicial da visualização inicial da planilha
        this.dataSource.paginator = this.paginator; // Paginação da planilha
        // this.valueProgress = 100
      })
    } else {
      console.log('Utilizando BD do Members Service')
      this.table.dataSource = this.dataSource // Atualização do banco de dados da planilha
      this.applyFilterOnInitTable() // Aplicação do filtro inicial da visualização inicial da planilha
      this.dataSource.paginator = this.paginator; // Paginação da planilha
      // this.valueProgress = 100  
    }
    // this.accessControl.accessControlAdmin("authUsersPage") // Função de autorização da página
  };


  applyFilter(event: Event) { // Filtro dinamico na tela da tabela
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilterOnInitTable() { // Filtro estatico para gerar visualização inicial da tabela
    const filterValue = "Ativo"
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
