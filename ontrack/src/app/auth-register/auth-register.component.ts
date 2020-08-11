import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.css']
})
export class AuthRegisterComponent implements OnInit {

  constructor(private router:Router) { }
  
  goToLogin() {
    this.router.navigate(["/login"]);
  }

  ngOnInit(): void {
  }

}
