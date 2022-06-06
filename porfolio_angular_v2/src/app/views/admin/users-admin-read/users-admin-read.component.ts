import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../../../services/users/users.service';
import { AuthenticationService } from '../../../services/authentication/authentication.service';


@Component({
  selector: 'app-users-admin-read',
  templateUrl: './users-admin-read.component.html',
  styleUrls: ['./users-admin-read.component.css']
})
export class UsersAdminReadComponent implements OnInit {

  constructor(
    private router: Router,
    private usersService: UsersService,
    private authenticationService: AuthenticationService, 
  ) { }

  ngOnInit(): void {
    this.authenticationService.authentication("usersAdminRead")   
    this.storeData = this.usersService.USERS_READ_UPDATE
    this.photoBase64 = this.storeData.photo
  }
  
  storeData: any = { id: "", photo: '', fname: '', lname: '', profession: '', email: '', phone: "", permission: "", status: "", createdBy: '', createdIn: '', modifiedBy: '', modifiedIn: '' }

  photoBase64: any 

  cancel(): void {
    console.log('Fechar janela')
    // this.showMassage('Operação cancelada!')
    this.router.navigate(['admin/users'])
  }


}
