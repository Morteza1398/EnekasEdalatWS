import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.css']
})
export class WhyComponent implements OnInit {
  why: any = {
    title: "چرا ما؟",
    description: "در راستای تحقق باور و اعتفاد خود اقدامات ذیل را به انجام رساندیم:",
    resons: [
      {
        title: "قانون کسب و کار",
        descriptions: [
          'دعوت از اساتید و صاحب نظران نخبه و برجسته‌ی حقوقی جهت آموزش و تربیت نیروی انسانی متخصص و کاردان به عنوان اولین اقدام مهم و اساسی',
        ],
      },
      {
        title: "قانون خانواده",
        descriptions: [
          'تعریف ساختار و سازمان حقوقی مدرن، متناسب با هدف ساماندهی و مدیریت موضوعات به صورت تخصصی',
        ],
      },
      {
        title: "دعوی تجاری",
        descriptions: [
          'فراهم نمودن فضای اداری در شآن ارباب رجوع و همکاران به منظور ارائه‌ی خدمات حرفه‌ای مطلوب',
        ],
      },
      {
        title: "جبران خسارت",
        descriptions: [
          'استفاده از تکنولوژی روز دنیا جهت تسهیل در ارائه‌ی خدمات و ارتباط با مراجعان گرانقدر'
        ],
      },
    ],
  };
  whyEn: any = {
    title: "Why Us",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    resons: [
      {
        title: "Property &amp; Business Law",
        descriptions: [
          "Pityful a rethoric question ran over her cheek, then she continued her way.",
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
        ],
      },
      {
        title: "Famimly Law",
        descriptions: [
          "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
        ],
      },
      {
        title: "Commercial Litigation",
        descriptions: [
          "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
        ],
      },
      {
        title: "Injury Compensation",
        descriptions: [
          "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.",
        ],
      },
    ],
  };

  constructor() { }

  ngOnInit() {
  }

}
