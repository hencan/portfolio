import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../login/login.service';
import { SnackbarService } from '../snackbar/snackbar.service'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  div_id: any

  constructor(
    private loginService: LoginService,
    private router: Router,
    private snackbarService: SnackbarService,
  ) { }

  authentication(id: any): void {
    if (this.loginService.isLogged == true) {
      if (this.loginService.loggedAs.permission == "Administrador") {
        document.getElementById(id).style.display = "block"
      } else {
        this.snackbarService.showMassage('Acesso negado, você não é um administrador')
        this.router.navigate([''])
      }
    } else {
      this.snackbarService.showMassage('Acesso negado, por favor faça o login')
      this.router.navigate([''])
    }
  }

}
