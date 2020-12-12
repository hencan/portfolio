import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { SnackbarService } from '../../services/snackbar/snackbar.service';
import { UsersService } from '../../services/users/users.service';
import { LoginService } from '../../services/login/login.service';
import { DatabaseService } from '../../services/database/database.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true

  // storeData = { id: 0, photo: '', username: '', password: '', fname: '', email: '', phone: '', profession: '', country: "Brasil", state: "", city: "", permission: "Usuário", status: "Ativo" }

  storeData = this.loginService.loggedAs

  // isLogged = this.loginService.isLogged

  constructor(
    private router: Router,
    private title: Title,
    private snackbarService: SnackbarService,
    private usersService: UsersService,
    private loginService: LoginService,
    private databaseService: DatabaseService,
  ) { }

  ngOnInit(): void {
    this.title.setTitle('HenCan | Login');
    if (document.getElementById("header").classList.contains("showToolbar") == false) {
      document.getElementById("header").classList.remove("hideToolbar")
      document.getElementById("header").classList.add("showToolbar")
    }
    this.isLogged()
    document.getElementById("user").focus()

    // this.accessControl.accessControlAdmin("authUsersPage") // Função de autorização da página
  }

  databaseLogin(): void {
    if (this.usersService.bdLoaded == false) {
      this.databaseService.getUsers().subscribe(response => {
        this.loginService.LOGIN_DATA_SERVICE = response.users.slice()
        // console.log('loginService.LOGIN_DATA_SERVICE', this.loginService.LOGIN_DATA_SERVICE)
        console.log('Banco de dados JSON Users importado para Login Service')
        this.checkUserPass()
        this.msgFail()
        this.stepFinal()
      })
    } else {
      console.log('Utilizando BD do Users Service')
      this.loginService.LOGIN_DATA_SERVICE = this.usersService.USERS_DATA_SERVICE.slice()
      this.checkUserPass()
      this.msgFail()
      this.stepFinal()
    }
  }

  checkUserPass(): void {
    for (var i = 0; i < this.loginService.LOGIN_DATA_SERVICE.length; i++) {
      if (this.storeData.username === this.loginService.LOGIN_DATA_SERVICE[i].username) {
        console.log('Username encontrado!')
        if (this.storeData.password === this.loginService.LOGIN_DATA_SERVICE[i].password) {
          console.log('Password correto!')
          console.log('Registrando login')
          this.loginService.loggedAs = Object.assign({}, this.loginService.LOGIN_DATA_SERVICE[i])
          this.loginService.isLogged = true
          console.log('Protegendo informações')
          this.loginService.loggedAs.password = 'acesso restrito'
          this.storeData = this.loginService.loggedAs
          // console.log("storeData", this.storeData)
          // console.log("loggedAs", this.loginService.loggedAs)
          // console.log("LOGIN_DATA_SERVICE[i]", this.loginService.LOGIN_DATA_SERVICE[i])
          // console.log("USERS_DATA_SERVICE[i]", this.usersService.USERS_DATA_SERVICE[i])
          if (this.loginService.loggedAs.permission === "Administrador") {
            console.log('***Usuário é administrador***')
            this.snackbarService.showMassage('***Usuário é administrador***')
          }
          document.getElementById("login").style.display = "none"
          document.getElementById("logged").style.display = "block"
          document.getElementById("buttonLogin").style.display = "none"
          document.getElementById("buttonLogged").style.display = "block"
          document.getElementById("buttonLogged_Img").setAttribute('src', this.loginService.loggedAs.photo)

          document.getElementById("header").classList.remove("showToolbar")
          document.getElementById("header").classList.add("hideToolbar")    
          
          // document.getElementById("buttonLogged_Span").innerHTML = this.loginService.loggedAs.fname
          this.router.navigate([''])
          
        } else {
          console.log('Password Incorreto')
        }
      }
    }
  }

  msgFail(): void {
    if (this.loginService.isLogged == false) {
      this.snackbarService.showMassage('Username ou Password Inválidos!')
      console.log('Username ou Password Inválidos')
    }
  }

  stepFinal(): void {
    console.log('Reset nos dados de autenticação')
    this.loginService.LOGIN_DATA_SERVICE = []
    // console.log("LOGIN_DATA_SERVICE", this.loginService.LOGIN_DATA_SERVICE)
    if (this.loginService.isLogged == false) {
      this.storeData.username = ""
      this.storeData.password = ""
      console.log('Reset nos dados de insertedLogin')
    }
  }

  login(): void {
    console.log('Check User')
    if (this.loginService.isLogged == false) {
      this.databaseLogin()
    }
  }

  loggof(): void {
    if (this.loginService.isLogged == true) {
      console.log('Reset no registro de Login')
      this.loginService.loggedAs = { id: 0, photo: '', username: '', password: '', fname: '', email: '', phone: '', profession: '', country: "", state: "", city: "", permission: "", status: "" }
      this.loginService.isLogged = false
      console.log('Reset na tela de Login')
      document.getElementById("login").style.display = "block"
      document.getElementById("logged").style.display = "none"
      document.getElementById("buttonLogin").style.display = "block"
      document.getElementById("buttonLogged").style.display = "none"
      // this.router.navigate([''])
      console.log('Reset nos dados de StoreData')
      this.storeData.username = ""
      this.storeData.password = ""
    }
  }

  isLogged(): void {
    if (this.loginService.isLogged == true) {
      document.getElementById("login").style.display = "none"
      document.getElementById("logged").style.display = "block"
    }
  }

}
