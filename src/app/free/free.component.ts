import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free',
  templateUrl: './free.component.html',
  styleUrls: ['./free.component.css']
})
export class FreeComponent implements OnInit {
  free: any = {
    title: 'مشاوره رایگان',
    description: 'توصیححات',
    btn: 'تماس با ما'
  };
  freeEn: any = {
    title: 'Free Consultation',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    btn: 'Get Started'
  };

  constructor() { }

  ngOnInit() {
  }

}
