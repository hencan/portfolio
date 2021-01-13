import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  MEMBERS_DATA_SERVICE: any = []

  bdLoaded = false

  constructor( ) {}
}
