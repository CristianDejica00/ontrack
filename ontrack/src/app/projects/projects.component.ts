import { Component, OnInit } from '@angular/core';
import { ProjectItem } from "./projectInterface/project.interface";


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {


  projects: ProjectItem[]=[
    {id: "1", color:"#FE5959", name:"Project 1", people:"asd", progress:25},
    {id: "2", color:"#FFA34E", name:"Project 2", people:"asd", progress:35},
    {id: "3", color:"#F1F51F", name:"Project 3", people:"asd", progress:85},
    {id: "4", color:"#56F13D", name:"Project 4", people:"asd", progress:10},
    {id: "5", color:"#6297FF", name:"Project 5", people:"asd", progress:40},
    {id: "6", color:"#CD62FF", name:"Project 6", people:"asd", progress:100}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
