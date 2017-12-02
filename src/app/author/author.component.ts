import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authorDetail={
    title: "Muhammad Zeeshan",
    rating: 4.0965,
    students: 310492,
    price: 190.05,
    releaseDate: new Date(2016, 3, 1)
  }

  constructor() { }

  ngOnInit() {
  }

}
