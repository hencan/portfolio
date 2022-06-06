import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  // urlToJson = 'assets/database.json'
  urlToUsers = 'assets/database_users.json'

  urlToProjects = 'assets/database_projects.json'

  urlToTutorials = 'assets/database_tutorials.json'

  urlToBlog = 'assets/database_blog.json'

  urlToInfo = 'assets/database_info.json'

  urlToLastestBlog = 'assets/lastestBlog.json'

  urlToLastestProjects = 'assets/lastestProjects.json'

  urlToLogos = 'assets/logos.json'

  urlToMusic = 'assets/music.json'

  constructor(
    private httpClient: HttpClient,
  ) { }

  getUsers(): Observable<any> {
    console.log("Database Service | Método Get Http Get JSON")
    return this.httpClient.get<any>(this.urlToUsers)
  }

  getProjects(): Observable<any> {
    console.log("Database Service | Método Get Http Get JSON")
    return this.httpClient.get<any>(this.urlToProjects)
  }

  getTutorials(): Observable<any> {
    console.log("Database Service | Método Get Http Get JSON")
    return this.httpClient.get<any>(this.urlToTutorials)
  }

  getBlog(): Observable<any> {
    console.log("Database Service | Método Get Http Get JSON")
    return this.httpClient.get<any>(this.urlToBlog)
  }

  getInfo(): Observable<any> {
    console.log("Database Service | Método Get Http Get JSON")
    return this.httpClient.get<any>(this.urlToInfo)
  }

  getLastestBlog(): Observable<any> {
    console.log("Database Service | Método Get Http Get JSON")
    return this.httpClient.get<any>(this.urlToLastestBlog)
  }

  getLastestProjects(): Observable<any> {
    console.log("Database Service | Método Get Http Get JSON")
    return this.httpClient.get<any>(this.urlToLastestProjects)
  }

  getLogos(): Observable<any> {
    console.log("Database Service | Método Get Http Get JSON")
    return this.httpClient.get<any>(this.urlToLogos)
  }

  getMusic(): Observable<any> {
    console.log("Database Service | Método Get Http Get JSON")
    return this.httpClient.get<any>(this.urlToMusic)
  }

}
