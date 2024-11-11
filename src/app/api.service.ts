import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  madhuobvdata$ = new BehaviorSubject("madhu");

  madhudata$ = new Subject();

  booksurl:string= "http://localhost:3000/BOOKS";


  constructor(private http:HttpClient) { 
  }

  addbooks(booksdata:any){
    return this.http.post(this.booksurl,booksdata)
  }

  getbooks(){
    return this.http.get(this.booksurl)
  }
}
