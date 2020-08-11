import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ProjectItem } from '../projects/projectInterface/project.interface';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {


  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  doing = [
    'qe',
    'asd',
    'WWEH',
    'weyt',
    'asfdh'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  constructor(private route: ActivatedRoute) { }

  currentProject: ProjectItem;

  projects: ProjectItem[]=[
    {id: "1", color:"#FE5959", name:"Project 1", people:"asd", progress:25},
    {id: "2", color:"#FFA34E", name:"Project 2", people:"asd", progress:35},
    {id: "3", color:"#F1F51F", name:"Project 3", people:"asd", progress:85},
    {id: "4", color:"#56F13D", name:"Project 4", people:"asd", progress:10},
    {id: "5", color:"#6297FF", name:"Project 5", people:"asd", progress:40},
    {id: "6", color:"#CD62FF", name:"Project 6", people:"asd", progress:100}
  ];
  
  id: string;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
    })

    for(var i=0;i<this.projects.length;i++) {
      if(this.projects[i].id == this.id) {
        this.currentProject = this.projects[i];
      }
    }

  }

}
