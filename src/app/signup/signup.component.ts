import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(data:any){
    this.http.post(`http://`, data).subscribe((result)=>{
      console.warn("result", result)
    })
  }

}
