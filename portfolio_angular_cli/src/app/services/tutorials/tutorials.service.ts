import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TutorialsService {

  TUTORIALS_DATA_SERVICE: any = []

  TUTORIALS_READ_UPDATE: any = []

  bdLoaded = false

  constructor() { }

  createData(a): void {
    this.TUTORIALS_DATA_SERVICE.push(a)
  }

  readData(a): void {
    this.TUTORIALS_READ_UPDATE = this.TUTORIALS_DATA_SERVICE[a]
  }

  updateReadData(a): void {
    var temp = []
    temp = this.TUTORIALS_DATA_SERVICE[a]
    this.TUTORIALS_READ_UPDATE = JSON.parse(JSON.stringify(temp))
  }

  updateSaveData(a): void {
    this.TUTORIALS_DATA_SERVICE[a] = this.TUTORIALS_READ_UPDATE
  }

  deleteData(a): void {
    this.TUTORIALS_DATA_SERVICE[a].status = "Excluído"
  }

}
