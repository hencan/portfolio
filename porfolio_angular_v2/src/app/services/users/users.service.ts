import { Injectable } from '@angular/core';
import { MembersService } from '../members/members.service'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  USERS_DATA_SERVICE: any = []

  USERS_READ_UPDATE: any = []

  bdLoaded = false

  constructor(
    private membersService: MembersService
  ) { }

  createData(a): void {
    this.USERS_DATA_SERVICE.push(a)
    // this.USERS_DATA_SERVICE.unshift(a)
    // console.log(this.USERS_DATA_SERVICE)
    // this.updateMembers()
  }

  readData(a): void {
    this.USERS_READ_UPDATE = this.USERS_DATA_SERVICE[a]
  }

  updateData(a): void {
    this.USERS_READ_UPDATE = this.USERS_DATA_SERVICE[a]
    // console.log(this.USERS_DATA_SERVICE)
  }

  deleteData(a): void {
    this.USERS_DATA_SERVICE[a].status = "Excluído"
    // console.log(this.USERS_DATA_SERVICE)
    // this.updateMembers()
  }

  // updateMembers(): void {
  //   console.log('Atualizando BD de Members')
  //   this.membersService.bdLoaded = true
  //   this.membersService.MEMBERS_DATA_SERVICE = this.USERS_DATA_SERVICE.slice()
  //   console.log(this.membersService.MEMBERS_DATA_SERVICE)
  //   for (let i = 0; i < this.membersService.MEMBERS_DATA_SERVICE.length; i++) {
  //     this.membersService.MEMBERS_DATA_SERVICE[i].password = 'acesso restrito'
  //   }
  //   console.log('Concluída Segurança do Password')
  // }

}
