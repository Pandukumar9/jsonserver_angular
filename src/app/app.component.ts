import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private api:ApiService){}
  ngOnInit() {
    this.api.madhuobvdata$.subscribe(res => {
      console.log(res);
    })
  }

  
  title = 'madhu_project';


}
