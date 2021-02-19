import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from './../services/api.service';
import {AuthService} from './../services/auth.service';
import {AccountService} from '../shared/account.service';
import {User} from '../models/user';
import {FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin = false;
  user: User;

  constructor(
   // private api: ApiService,
    //private auth: AuthService,
    //private router: Router,
    private accountService: AccountService,
  ) {
    this.accountService.user.subscribe(x => this.user = x);
  }

  ngOnInit(): void {
  }


  /*isUserLogin(): void{
    console.log(this.auth.getUserDetails());
    if (this.auth.getUserDetails() != null){
      this.isLogin = true;
    }
  }
*/
  logout() {
    this.accountService.logout();
  }

}


