import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  goToHome() {
    this.router.navigate(["/home"]);
  }

  goToProjects() {
    this.router.navigate(["/projects"]);
  }

  goToSchedule() {
    this.router.navigate(["/schedule"]);
  }

  goToInvoices() {
    this.router.navigate(["/invoices"]);
  }

  ngOnInit(): void {
  }

}
