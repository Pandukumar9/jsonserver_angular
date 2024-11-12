import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.scss']
})
export class AddBooksComponent {

  bookForm: FormGroup;

  constructor(private fb: FormBuilder,private api:ApiService ) {
    this.bookForm = this.fb.group({
      bookName: ['', [Validators.required, Validators.minLength(3)]],
      bookPrice: ['', [Validators.required, Validators.min(1)]],
      bookType: ['', Validators.required],
      bookDescription: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  ngOnInit(){
    this.api.getbooks().subscribe(res => {
      console.log(res)
    });

    this.api.madhuobvdata$.next("karthik");

    this.api.madhuobvdata$.subscribe(res => {
      console.log(res);
    })
  }

  onSubmit() {
    if (this.bookForm.valid) {
      console.log("Book Data:", this.bookForm.value);
      // Add code to handle form submission, such as calling a service to save the data
    this.api.addbooks(this.bookForm.value).subscribe(res => {
      console.log(res)
    })
      this.bookForm.reset();
    }
  }

}
