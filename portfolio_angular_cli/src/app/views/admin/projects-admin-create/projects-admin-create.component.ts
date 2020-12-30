import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { AngularEditorConfig } from '@kolkov/angular-editor';

import { LoginService } from '../../../services/login/login.service'
import { SnackbarService } from '../../../services/snackbar/snackbar.service'
import { ProjectsService } from '../../../services/projects/projects.service';
import { AuthenticationService } from '../../../services/authentication/authentication.service';

@Component({
  selector: 'app-projects-admin-create',
  templateUrl: './projects-admin-create.component.html',
  styleUrls: ['./projects-admin-create.component.css']
})
export class ProjectsAdminCreateComponent implements OnInit {

  storeData: any = { id: '', imageTitle: '', title: '', subtitle: '', categories: '', linkLive: '', linkGithub: '', content: '', situation: '', status: "Ativo", createdBy: '', createdIn: '', modifiedBy: '', modifiedIn: '', date: '', author: '' }

  photoBase64: any = 'data:image/png;base64,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'
  
  hide = true

  imageChangedEvent: any = ''

  croppedImage: any = ''

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '20rem',
    minHeight: '5rem',
    placeholder: 'Digite o texto aqui...',
    translate: 'no',
    defaultParagraphSeparator: 'div',
    defaultFontName: '',
    defaultFontSize: '',
    sanitize: false,
    fonts: [
      {class: 'Roboto', name: 'Roboto'},
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
    ],
    outline: false,
    uploadWithCredentials: false,
    toolbarPosition: 'top',
    customClasses: [
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ],
    toolbarHiddenButtons: [
      [
        // 'undo',
        // 'redo',
        // 'bold',
        // 'italic',
        // 'underline',
        'strikeThrough',
        // 'subscript',
        // 'superscript',
        // 'justifyLeft',
        // 'justifyCenter',
        // 'justifyRight',
        // 'justifyFull',
        // 'indent',
        // 'outdent',
        // 'insertUnorderedList',
        // 'insertOrderedList',
        'heading',
        'fontName'
      ],
      [
        'fontSize',
        'textColor',
        'backgroundColor',
        // 'customClasses',
        'link',
        'unlink',
        // 'insertImage',
        'insertVideo',
        // 'insertHorizontalRule',
        // 'removeFormat',
        // 'toggleEditorMode'
      ]
    ]
  }
  constructor(
    private router: Router,
    private loginService: LoginService,
    private snackBarService: SnackbarService,
    private projectService: ProjectsService,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.authenticationService.authentication("projectAdminCreate")   
  }

  saveDraft(): void {
    console.log('Botão Salvar Rascunho clicado')
    console.log('Início dos processos do botão Salvar Rascunho')
    console.log('Atribuição de dados ao registro')
    this.storeData.id = this.projectService.DATA_SERVICE.length + 1
    console.log('-> Atribuição do nº de ID conforme tamanho do array')
    this.storeData.situation = 'Rascunho'
    console.log('Atribuição do Usuário e Data')
    this.storeData.createdBy = this.loginService.loggedAs.username.toString()
    this.storeData.createdIn = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
    this.storeData.modifiedBy = this.loginService.loggedAs.username.toString()
    this.storeData.modifiedIn = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
    this.storeData.date = new Date().toLocaleDateString()
    this.storeData.author = this.loginService.loggedAs.fname.toString()
    this.storeData.imageTitle = this.photoBase64
    console.log('-> Atribuição da foto em base64 na posição photo do array')
    if (this.storeData.title == "") {
      this.storeData.title = "unknown_ProjectId_" + this.storeData.id
      this.storeData.subtitle = "Não informado"
    }
    console.log('-> Concluída verificação do campo title não nulo')
    console.log(this.storeData)
    this.projectService.createData(this.storeData)
    console.log('-> Concluído o cadastro do novo item')
    this.snackBarService.showMassage('Cadastro feito com sucesso!')
    console.log('-> Snackbar da mensagem de sucesso')
    this.router.navigate(['admin/projects'])
    console.log('-> Router para página de Posts do Projects')
    console.log('Fim do processo do botão Salvar Rascunho')
  }

  post(): void {
    console.log('Botão Postar clicado')
    console.log('Início dos processos do botão Postar')
    console.log('Atribuição de dados ao registro')
    this.storeData.id = this.projectService.DATA_SERVICE.length + 1
    console.log('-> Atribuição do nº de ID conforme tamanho do array')
    this.storeData.situation = 'Postado'
    console.log('Atribuição do Usuário e Data')
    this.storeData.createdBy = this.loginService.loggedAs.username.toString()
    this.storeData.createdIn = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
    this.storeData.modifiedBy = this.loginService.loggedAs.username.toString()
    this.storeData.modifiedIn = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
    this.storeData.date = new Date().toLocaleDateString()
    this.storeData.author = this.loginService.loggedAs.fname.toString()
    this.storeData.imageTitle = this.photoBase64
    console.log('-> Atribuição da foto em base64 na posição photo do array')
    if (this.storeData.title == "") {
      this.storeData.title = "unknown_ProjectId_" + this.storeData.id
      this.storeData.subtitle = "Não informado"
    }
    console.log('-> Concluída verificação do campo title não nulo')
    // console.log(this.storeData)
    this.projectService.createData(this.storeData)
    console.log('-> Concluído o cadastro do novo item')
    this.snackBarService.showMassage('Cadastro feito com sucesso!')
    console.log('-> Snackbar da mensagem de sucesso')
    this.router.navigate(['admin/projects'])
    console.log('-> Router para página de Posts do Projects')
    console.log('Fim do processo do botão Postar')
  }

  cancel(): void {
    console.log('Botão cancelar clicado')
    console.log('Início dos processos do botão cancelar')
    this.snackBarService.showMassage('Operação cancelada!')
    console.log('-> Snackbar da mensagem de sucesso')
    this.router.navigate(['admin/projects'])
    console.log('-> Router para página de Posts')
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
