import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  LOGIN_DATA_SERVICE: any = []

  isLogged = false

  loggedAs: any = { id: 0, photo: '', username: '', password: '', fname: '', email: '', phone: '', profession: '', country: "", state: "", city: "", permission: "", status: "" }

  constructor() { }
}
