import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  PROJECTS_DATA_SERVICE: any = []

  PROJECTS_READ_UPDATE: any = []

  bdLoaded = false

  constructor() { }

  createData(a): void {
    this.PROJECTS_DATA_SERVICE.unshift(a)
  }

  readData(a): void {
    this.PROJECTS_READ_UPDATE = this.PROJECTS_DATA_SERVICE[a]
  }

  // updateData(a): void {
  //   this.PROJECTS_READ_UPDATE = this.PROJECTS_DATA_SERVICE[a]
  // }

  updateReadData(a): void {
    var temp = []
    temp = this.PROJECTS_DATA_SERVICE[a]
    this.PROJECTS_READ_UPDATE = JSON.parse(JSON.stringify(temp))
  }

  updateSaveData(a): void {
    this.PROJECTS_DATA_SERVICE[a] = this.PROJECTS_READ_UPDATE
  }

  deleteData(a): void {
    this.PROJECTS_DATA_SERVICE[a].status = "Excluído"
  }
}
