import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';

import { TutorialsService } from '../../../services/tutorials/tutorials.service';
import { AuthenticationService } from '../../../services/authentication/authentication.service';

@Component({
  selector: 'app-tutorials-admin-read',
  templateUrl: './tutorials-admin-read.component.html',
  styleUrls: ['./tutorials-admin-read.component.css']
})
export class TutorialsAdminReadComponent implements OnInit {

  storeData: any = { id: '', imageTitle: '', title: '', subtitle: '', categories: '', paragraf1: '', paragraf2: '', paragraf3: '', paragraf4: '', paragraf5: '', situation: '', status: "", createdBy: '', createdIn: '', modifiedBy: '', modifiedIn: '', date: '', author: '' }

  photoBase64: any

  editorConfig: AngularEditorConfig = {
    editable: false,
    spellcheck: false,
    height: '20rem',
    minHeight: '5rem',
    placeholder: 'Digite o texto aqui...',
    translate: 'no',
    // defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    defaultFontSize: '3',
    sanitize: false,
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    outline: true,
    uploadWithCredentials: false,
    enableToolbar: false,
    showToolbar: false,
    toolbarPosition: 'top',
    // customClasses: [
    //   {
    //     name: "quote",
    //     class: "quote",
    //   },
    //   {
    //     name: 'redText',
    //     class: 'redText'
    //   },
    //   {
    //     name: "titleText",
    //     class: "titleText",
    //     tag: "h1",
    //   },
    // ],
    toolbarHiddenButtons: [
      // ['bold']
    ]
  }

  constructor(
    private router: Router,
    private tutorialsService: TutorialsService,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.authenticationService.authentication("tutorialsAdminRead")   
    this.storeData = this.tutorialsService.READ_UPDATE
    this.photoBase64 = this.storeData.imageTitle
    // document.getElementById('paragraf1').innerHTML = this.storeData.paragraf1
  }

  cancel(): void {
    console.log('Retornando a admin/tutorials')
    // this.showMassage('Operação cancelada!')
    this.router.navigate(['admin/tutorials'])
  }

}
