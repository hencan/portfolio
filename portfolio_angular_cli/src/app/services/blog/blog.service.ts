import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  BLOG_DATA_SERVICE: any = []

  BLOG_READ_UPDATE: any = []

  bdLoaded = false

  constructor() { }

  createData(a): void {
    this.BLOG_DATA_SERVICE.unshift(a)
  }

  readData(a): void {
    this.BLOG_READ_UPDATE = this.BLOG_DATA_SERVICE[a]
  }

  updateReadData(a): void {
    var temp = []
    temp = this.BLOG_DATA_SERVICE[a]
    this.BLOG_READ_UPDATE = JSON.parse(JSON.stringify(temp))
  }

  updateSaveData(a): void {
    this.BLOG_DATA_SERVICE[a] = this.BLOG_READ_UPDATE
  }

  deleteData(a): void {
    this.BLOG_DATA_SERVICE[a].status = "Excluído"
  }

}

