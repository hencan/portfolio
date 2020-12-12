import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { AngularEditorConfig } from '@kolkov/angular-editor';

import { LoginService } from '../../../services/login/login.service';
import { DatabaseService } from '../../../services/database/database.service';
import { SnackbarService } from '../../../services/snackbar/snackbar.service';
import { InfoService } from '../../../services/info/info.service';
import { AuthenticationService } from '../../../services/authentication/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  storeData: any = { id: '', bio: '', skills: '', clients: '', services: '', contact: '', situation: '', status: "Ativo", createdBy: '', createdIn: '', modifiedBy: '', modifiedIn: '', date: '', author: '' }

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
    private databaseService: DatabaseService,
    private loginService: LoginService,
    private snackBarService: SnackbarService,
    private infoService: InfoService,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.authenticationService.authentication("profileAdminUpdate")
    if (this.infoService.bdLoaded == false) {
      this.databaseService.getInfo().subscribe(response => {
        this.infoService.INFO_DATA_SERVICE = response.profile
        console.log('Banco de dados JSON Info importado para Info Service')
        this.infoService.bdLoaded = true
        console.log('Banco de dados JSON Lastest Info importado para Info Component')
        this.storeData = this.infoService.INFO_DATA_SERVICE
        console.log(this.storeData)
      })
    } else {
      console.log('Utilizando BD do Widget Service')
      this.storeData = this.infoService.INFO_DATA_SERVICE
    }
  }

}
