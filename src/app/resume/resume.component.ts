import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  resume: any = {
    parts: [
      {
        title: 'گروه وکلا',
        description: 'بل توصضیحات',
        icon: 'flaticon-jury'
      },
      {
        title: 'هیچکس بالاتر از قانون نیست',
        description: 'توصضیحات.',
        icon: 'flaticon-law'
      },
      {
        title: 'تالار عدالت',
        description: 'توصضیحات',
        icon: 'flaticon-courthouse'
      }
    ]
  };
  resumeEn: any = {
    parts: [
      {
        title: 'Group of Lawyers',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        icon: 'flaticon-jury'
      },
      {
        title: 'No One is Above The Law',
        description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
        icon: 'flaticon-law'
      },
      {
        title: 'Hall of Justice',
        description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
        icon: 'flaticon-courthouse'
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
