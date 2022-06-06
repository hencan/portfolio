import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SnackbarService } from '../../../services/snackbar/snackbar.service';
import { UsersService } from '../../../services/users/users.service';
import { LoginService } from '../../../services/login/login.service';
import { AuthenticationService } from '../../../services/authentication/authentication.service';


@Component({
  selector: 'app-users-admin-delete',
  templateUrl: './users-admin-delete.component.html',
  styleUrls: ['./users-admin-delete.component.css']
})
export class UsersAdminDeleteComponent implements OnInit {

  storeData: any = { id: "", photo: '', fname: '', lname: '', profession: '', email: '', phone: "", permission: "", status: "", createdBy: '', createdIn: '', modifiedBy: '', modifiedIn: '' }

  photoBase64: any

  posArray: any = ""

  constructor(
    private router: Router,
    private snackBarService: SnackbarService,
    private usersService: UsersService,
    private loginService: LoginService,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.authenticationService.authentication("usersAdminDelete")   
    this.storeData = this.usersService.USERS_READ_UPDATE
    this.photoBase64 = this.storeData.photo
  }

  cancel(): void {
    console.log('Fechar janela')
    this.snackBarService.showMassage('Operação cancelada!')
    this.router.navigate(['admin/users'])
  }

  delete(id): void {
    this.storeData.modifiedBy = this.loginService.loggedAs.fname.toString()
    this.storeData.modifiedIn = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
    for (var i = 0; i < this.usersService.USERS_DATA_SERVICE.length; i++) {
      if (this.usersService.USERS_DATA_SERVICE[i].id == id) {
        this.posArray = i
        break
      }
    }
    this.usersService.deleteData(this.posArray)
    this.snackBarService.showMassage('Registro apagado!')
    this.router.navigate(['admin/users'])
  }

}
