import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-auth-main',
  templateUrl: './auth-main.component.html',
  styleUrls: ['./auth-main.component.css']
})
export class AuthMainComponent implements OnInit {

  constructor(private router:Router) { }

  goToRegister() {
    this.router.navigate(["/register"]);
  }
  
  goToLogin() {
    this.router.navigate(["/login"]);
  }

  ngOnInit(): void {

  }

}
