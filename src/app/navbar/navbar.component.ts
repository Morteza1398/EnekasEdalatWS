import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbar: any = {
    title: "انعکاس عدالت",
    home: "خانه",
    about: "درباره ما",
    why: "چرا ما",
    areas: "حوزه کاری",
    attorneys: "Attorneys",
    testimonials: "Testimonials",
    contact: "تماس با ما"
  };
  navbarEn: any = {
    title: "Law",
    home: "Home",
    about: "About",
    why: "Why",
    areas: "Practicing Areas",
    attorneys: "Attorneys",
    testimonials: "Testimonials",
    contact: "Contact"
  };


  constructor() { }

  ngOnInit() {
  }

}
