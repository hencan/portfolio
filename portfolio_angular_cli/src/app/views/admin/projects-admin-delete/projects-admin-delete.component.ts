import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';

import { LoginService } from '../../../services/login/login.service';
import { SnackbarService } from '../../../services/snackbar/snackbar.service';
import { ProjectsService } from '../../../services/projects/projects.service';
import { AuthenticationService } from '../../../services/authentication/authentication.service';


@Component({
  selector: 'app-projects-admin-delete',
  templateUrl: './projects-admin-delete.component.html',
  styleUrls: ['./projects-admin-delete.component.css']
})
export class ProjectsAdminDeleteComponent implements OnInit {

  editorConfig: AngularEditorConfig = {
    editable: false,
    spellcheck: false,
    height: '20rem',
    minHeight: '5rem',
    placeholder: '',
    translate: 'no',
    // defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    defaultFontSize: '3',
    sanitize: false,
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
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
    private loginService: LoginService,
    private snackBarService: SnackbarService,
    private projectsService: ProjectsService,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.authenticationService.authentication("projectAdminDelete")   
    this.storeData = this.projectsService.PROJECTS_READ_UPDATE
    this.photoBase64 = this.storeData.imageTitle
  }
  
  storeData: any = { id: '', imageTitle: '', title: '', subtitle: '', categories: '',  linkLive: '', linkGithub: '', content: '', situation: '', status: "", createdBy: '', createdIn: '', modifiedBy: '', modifiedIn: '', date: '', author: ''  }

  photoBase64: any
  
  posArray: any = ""

  cancel(): void {
    console.log('Retornando a admin/projects')
    // this.showMassage('Operação cancelada!')
    this.router.navigate(['admin/projects'])
  }

  delete(id): void {
    this.storeData.modifiedBy = this.loginService.loggedAs.fname.toString()
    this.storeData.modifiedIn = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
    for (var i = 0; i < this.projectsService.PROJECTS_DATA_SERVICE.length; i++) {
      if (this.projectsService.PROJECTS_DATA_SERVICE[i].id == id) {
        this.posArray = i
        break
      }
    }
    this.projectsService.deleteData(this.posArray)
    this.snackBarService.showMassage('Registro apagado!')
    this.router.navigate(['admin/projects'])
  }

}
