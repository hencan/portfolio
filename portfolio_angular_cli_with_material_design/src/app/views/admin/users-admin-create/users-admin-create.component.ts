import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';

import { LoginService } from '../../../services/login/login.service';
import { SnackbarService } from '../../../services/snackbar/snackbar.service';
import { UsersService } from '../../../services/users/users.service';
import { AuthenticationService } from '../../../services/authentication/authentication.service';


@Component({
  selector: 'app-users-admin-create',
  templateUrl: './users-admin-create.component.html',
  styleUrls: ['./users-admin-create.component.css']
})
export class UsersAdminCreateComponent implements OnInit {

  storeData = { id: "", photo: '', username: '', password: '', fname: '', email: '', phone: '', profession: '', country: "Brasil", state: "", city: "", permission: "Usuário", status: "Ativo", createdBy: '', createdIn: '', modifiedBy: '', modifiedIn: '' }

  photoBase64: any = 'data:image/webp;base64,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'
  
  hide = true

  imageChangedEvent: any = ''

  croppedImage: any = ''

  constructor(
    private router: Router,
    private loginService: LoginService,
    private snackBarService: SnackbarService,
    private usersService: UsersService,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.authenticationService.authentication("usersAdminCreate")   
  }

  create(): void {
    console.log('Botão cadastrar clicado')
    console.log('Início dos processos do botão cadastrar')
    this.storeData.id = this.usersService.USERS_DATA_SERVICE.length + 1
    console.log('Atribuição do Usuário e Data')
    this.storeData.createdBy = this.loginService.loggedAs.username.toString()
    this.storeData.createdIn = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
    this.storeData.modifiedBy = this.loginService.loggedAs.username.toString()
    this.storeData.modifiedIn = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
    console.log('-> Atribuição do nº de ID conforme tamanho do array')
    this.storeData.photo = this.photoBase64
    console.log('-> Atribuição da foto em base64 na posição photo do array')
    if (this.storeData.username == "") {
      this.storeData.username = "unknown_UserId_" + this.storeData.id
      this.storeData.fname = "Não informado"
      this.storeData.email = "Não informado"
    }
    console.log('-> Concluída verificação do campo username não nulo')
    console.log(this.storeData)
    this.usersService.createData(this.storeData)
    console.log('-> Concluído o cadastro do novo item')
    this.snackBarService.showMassage('Cadastro feito com sucesso!')
    console.log('-> Snackbar da mensagem de sucesso')
    this.router.navigate(['admin/users'])
    console.log('-> Router para página de Usuário')
    console.log('Fim do processo do botão cadastrar')
  }

  cancel(): void {
    console.log('Botão cancelar clicado')
    console.log('Início dos processos do botão cancelar')
    this.snackBarService.showMassage('Operação cancelada!')
    console.log('-> Snackbar da mensagem de sucesso')
    this.router.navigate(['admin/users'])
    console.log('-> Router para página de Usuário')
    console.log('Fim do processo do botão cancelar')
  }

  // Image Cropper Functions
  fileChangeEvent(event: any): void {
    console.log('Botão Chance Image clicado')
    console.log('Início dos processos do botão Change Image')
    document.getElementById('createPhotoFinal').style.display = 'none'
    document.getElementById('createPhotoChange').style.display = 'block'
    this.imageChangedEvent = event
    console.log('Término dos processos do botão Change Image')
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
  saveImageCroppie(): void {
    console.log('Botão Save Image clicado')
    console.log('Início dos processos do botão Save Image')
    this.photoBase64 = this.croppedImage
    this.croppedImage = ''
    this.imageChangedEvent = ''
    document.getElementById('createPhotoFinal').style.display = 'block'
    document.getElementById('createPhotoChange').style.display = 'none'
    console.log('Término dos processos do botão Save Image')
  }
  cancelImageCroppie(): void {
    console.log('Users-Create | Botão Cancel Image clicado')
    console.log('Início dos processos do botão Cancel Image')
    this.croppedImage = ''
    this.imageChangedEvent = ''
    document.getElementById('createPhotoFinal').style.display = 'block'
    document.getElementById('createPhotoChange').style.display = 'none'
    console.log('Término dos processos do botão Cancel Image')

  }

}
