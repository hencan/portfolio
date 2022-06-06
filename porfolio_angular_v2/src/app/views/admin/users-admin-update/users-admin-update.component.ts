import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';

import { LoginService } from '../../../services/login/login.service';
import { SnackbarService } from '../../../services/snackbar/snackbar.service';
import { UsersService } from '../../../services/users/users.service';
import { AuthenticationService } from '../../../services/authentication/authentication.service';


@Component({
  selector: 'app-users-admin-update',
  templateUrl: './users-admin-update.component.html',
  styleUrls: ['./users-admin-update.component.css']
})
export class UsersAdminUpdateComponent implements OnInit {

  constructor(
    private router: Router, 
    private loginService: LoginService,
    private snackbarService: SnackbarService,
    private usersService: UsersService,
    private authenticationService: AuthenticationService, 
  ) { }

  storeData: any = { id: "", photo: '', fname: '', lname: '', profession: '', email: '', phone: "", permission: "", status: "", createdBy: '', createdIn: '', modifiedBy: '', modifiedIn: '' }

  backupData: any = { id: "", photo: '', fname: '', lname: '', profession: '', email: '', phone: "", permission: "", status: "", createdBy: '', createdIn: '', modifiedBy: '', modifiedIn: '' }

  photoBase64: any 

  hide = true

  imageChangedEvent: any = ''

  croppedImage: any = ''

  ngOnInit(): void {
    this.authenticationService.authentication("usersAdminUpdate")   
    this.storeData = this.usersService.USERS_READ_UPDATE
    this.backupData = JSON.parse(JSON.stringify(this.usersService.USERS_READ_UPDATE))
    this.photoBase64 = this.storeData.photo
  }

  cancel(): void {
    console.log('Fechar janela')
    this.usersService.USERS_READ_UPDATE = this.backupData
    this.snackbarService.showMassage('Operação cancelada!')
    this.router.navigate(['admin/users'])
  }

  update(): void {
    this.storeData.photo = this.photoBase64
    this.storeData.modifiedBy = this.loginService.loggedAs.fname.toString()
    this.storeData.modifiedIn = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
    // console.log(this.storeData)
    this.snackbarService.showMassage('Atualização feita com sucesso!')
    this.router.navigate(['admin/users'])
  }

  // Image Cropper Functions
  fileChangeEvent(event: any): void {
    console.log('Botão Chance Image clicado')
    console.log('Início dos processos do botão Change Image')
    document.getElementById('usersUpdatePhotoFinal').style.display = 'none'
    document.getElementById('usersUpdatePhotoChange').style.display = 'block'
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
    document.getElementById('usersUpdatePhotoFinal').style.display = 'block'
    document.getElementById('usersUpdatePhotoChange').style.display = 'none'
    console.log('Término dos processos do botão Save Image')
  }
  cancelImageCroppie(): void {
    console.log('Botão Cancel Image clicado')
    console.log('Início dos processos do botão Cancel Image')
    this.croppedImage = ''
    this.imageChangedEvent = ''
    document.getElementById('usersUpdatePhotoFinal').style.display = 'block'
    document.getElementById('usersUpdatePhotoChange').style.display = 'none'
    console.log('Término dos processos do botão Cancel Image')

  }


}
