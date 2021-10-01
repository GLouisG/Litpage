import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  stories:any [] = [];
  constructor(private giveService:DataService) { }

  ngOnInit(): void {
  }
  giveStories(){
    this.giveService.getStories().subscribe((data) => {
      this.stories=data;
    })    
  }
  giveAction(){
    this.giveService.getAction().subscribe((data) => {
      this.stories=data;
    })   
  } 
  giveFantasy(){
    this.giveService.getFantasy().subscribe((data) => {
      this.stories=data;
    })        
  }  
  giveScifi(){
    this.giveService.getScifi().subscribe((data) => {
      this.stories=data;
    })        
  }  
  }


