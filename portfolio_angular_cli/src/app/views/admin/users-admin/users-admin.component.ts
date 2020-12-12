import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { UsersService } from '../../../services/users/users.service';
import { DatabaseService } from '../../../services/database/database.service';
import { AuthenticationService } from '../../../services/authentication/authentication.service';


@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.css']
})
export class UsersAdminComponent implements OnInit {

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedColumns: string[] = ['id', 'photo', 'username', 'fname', 'permission', 'modifiedBy', 'modifiedIn'];

  dataSource: any = new MatTableDataSource(this.usersService.USERS_DATA_SERVICE) // Objeto de dados do componente

  posArray: any = ""

  constructor(
    private router: Router, 
    private usersService: UsersService,
    private databaseService: DatabaseService,
    private authenticationService: AuthenticationService,
  ) { };

  ngOnInit(): void {
    this.authenticationService.authentication("usersAdmin")   
    if (this.usersService.bdLoaded == false) {
      this.databaseService.getUsers().subscribe(response => {
        console.log("Realizado segurança nos dados")
        // console.log(response.users)
        this.usersService.USERS_DATA_SERVICE = response.users
        console.log('Banco de dados JSON Users importado para Users Service')
        this.dataSource = new MatTableDataSource(this.usersService.USERS_DATA_SERVICE)
        this.usersService.bdLoaded = true
        console.log('Banco de dados JSON Users importado para Users Component')
        this.table.dataSource = this.dataSource // Atualização do banco de dados da planilha
        this.applyFilterOnInitTable() // Aplicação do filtro inicial da visualização inicial da planilha
        this.dataSource.paginator = this.paginator; // Paginação da planilha
      })
    } else {
      console.log('Utilizando BD do Users Service')
    }
    this.table.dataSource = this.dataSource // Atualização do banco de dados da planilha
    this.applyFilterOnInitTable() // Aplicação do filtro inicial da visualização inicial da planilha
    this.dataSource.paginator = this.paginator; // Paginação da planilha
    
    // this.accessControl.accessControlAdmin("authUsersPage") // Função de autorização da página
  };

  buttonCreate(): void {
    console.log('***')
    console.log('Users | Botão criar clicado')
    console.log('Início dos processos do botão criar')
    this.router.navigate(['admin/users/create'])
    console.log('-> Router para página de Cadastrar Usuário')
    console.log('Fim do processo do botão criar')
    console.log('***')
  };

  buttonRead(element): void {
    console.log('***')
    console.log('Users | Botão ver clicado')
    console.log('Início dos processos do botão ver')
    for (var i = 0; i < this.usersService.USERS_DATA_SERVICE.length; i++) {
      if (this.usersService.USERS_DATA_SERVICE[i].id == element.id) {
        this.posArray = i
        break
      }
    }
    console.log('-> Atribuição do nº de ID na variável id')
    this.usersService.readData(this.posArray)
    console.log('-> Chamada função readUpdateData no Users Service')
    this.router.navigate(['admin/users/read'])
    console.log('-> Router para página de Dados do Usuário')
    console.log('Fim do processo do botão ver')
    console.log('***')
  }

  buttonUpdate(id): void {
    console.log('***')
    console.log('Users | Botão editar clicado')
    console.log('Início dos processos do botão editar')
    for (var i = 0; i < this.usersService.USERS_DATA_SERVICE.length; i++) {
      if (this.usersService.USERS_DATA_SERVICE[i].id == id) {
        this.posArray = i
        break
      }
    }
    this.usersService.updateData(this.posArray)
    console.log('-> Chamada função readUpdateData no Users Service')
    this.router.navigate(['admin/users/update'])
    console.log('-> Router para página de Editar Usuário')
    console.log('Fim do processo do botão editar')
    console.log('***')
  }

  buttonDelete(element): void {
    console.log('***')
    console.log('Users | Botão excluir clicado')
    console.log('Início dos processos do botão excluir')
    for (var i = 0; i < this.usersService.USERS_DATA_SERVICE.length; i++) {
      if (this.usersService.USERS_DATA_SERVICE[i].id == element.id) {
        this.posArray = i
        break
      }
    }
    console.log('-> Atribuição do nº de ID na variável id')
    this.usersService.readData(this.posArray)
    console.log('-> Chamada função readUpdateData no Users Service')
    this.router.navigate(['admin/users/delete'])
    console.log('-> Router para página de Excluir Usuário')
    console.log('Fim do processo do botão excluir')
    console.log('***')
  }

  applyFilter(event: Event) { // Filtro dinamico na tela da tabela
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilterOnInitTable() { // Filtro estatico para gerar visualização inicial da tabela
    const filterValue = "Ativo"
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
