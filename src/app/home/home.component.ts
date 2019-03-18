import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home: any = {
    title: "انعکاس اعدالت",
    description: "موسسه حقوقی",
    btn: "مشاوره رایگان",
  };
  homeEn: any = {
    title: "Enekas Edalat",
    description: "Great Law Firm",
    btn: "Free Consultation",
  };

  constructor() { }

  ngOnInit() {
  }

}
