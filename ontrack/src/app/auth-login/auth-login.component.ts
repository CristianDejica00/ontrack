import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

  constructor(private router:Router) { }
  
  goToRegister() {
    this.router.navigate(["/register"]);
  }

  ngOnInit(): void {
  }

}
