import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-storybuilder',
  templateUrl: './storybuilder.component.html',
  styleUrls: ['./storybuilder.component.css']
})
export class StorybuilderComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(data:any){
    this.http.post(`http://`, data).subscribe((result)=>{
      console.warn("result", result)
    })
  }

}
