import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  INFO_DATA_SERVICE: any = []

  bdLoaded = false

  constructor() { }
}
