import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WidgetsService {

  LASTEST_BLOG_DATA_SERVICE: any = []

  LASTEST_PROJECTS_DATA_SERVICE: any = []

  lastest_blog_Loaded = false

  lastest_projects_Loaded = false

  constructor() { }
}
