import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ApiService } from './../services/api.service';
import { AuthService } from './../services/auth.service';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin = false;

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  isUserLogin(): void{
    console.log(this.auth.getUserDetails());
    if (this.auth.getUserDetails() != null){
      this.isLogin = true;
    }
  }
}


