import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {

  user = {
    name: '',
    email: '',
    message: ''
  };

  posts: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.http
      .get<any[]>(
        'https://jsonplaceholder.typicode.com/posts?_limit=4'
      )
      .subscribe(data => {
        this.posts = data;
      });

  }

  submitForm(): void {

    alert('Form submitted successfully!');
    console.log(this.user);

    this.user = {
      name: '',
      email: '',
      message: ''
    };

  }

}