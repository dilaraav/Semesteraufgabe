import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isLogin = false;

  constructor(
    private api: ApiService,
    private auth: AuthService,
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
