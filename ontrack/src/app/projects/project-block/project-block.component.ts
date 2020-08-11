import { Component, OnInit, Input } from '@angular/core';
import { ProjectItem } from '../projectInterface/project.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-block',
  templateUrl: './project-block.component.html',
  styleUrls: ['./project-block.component.css']
})
export class ProjectBlockComponent implements OnInit {


  @Input() public projects: ProjectItem;

  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  lessThan25(): any {
    if(this.projects.progress <= 25) {
      return true;
    }
  }

  lessThan50(): any {
    if(this.projects.progress <= 50 && this.projects.progress > 25) {
      return true;
    }
  }

  lessThan75(): any {
    if(this.projects.progress <= 75 && this.projects.progress > 50) {
      return true;
    }
  }

  lessThan100(): any {
    if(this.projects.progress <= 100 && this.projects.progress > 75) {
      return true;
    }
  }

  goToProjectId(id: string): void {
    this.router.navigate(["/projects/"+id]);
  }

}
