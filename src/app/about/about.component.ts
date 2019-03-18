import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: any = {
    title: "در باره ما",
    descriptions: [
      "انعکاس عدالت موسسه ای است با بیش از سه دهه تجربه در تمامی موارد حقوقی و کیفری ... امروزه وکلای زیادی آماده خدمت رسانی به مردم می باشند اما آنچه آنها را از یکدیگر متمایز می نماید، میزان تجربه وکلا و میزان مراجعین آنها و به دست آوردن نتایج دلخواه انهاست. یک وکیل خبره و باتجربه همواره از طریق درست کاری و علم خود بین مردم مطرح می شود و هیچگاه اقدام به ارائه تبلیغات دروغین نمی نماید.",
      "انعکاس عدالت با استفاده از بهترین و مجربترین وکلای کشور اعم از قضات بازنشسته دادگستری و اساتید دانشگاه ها و... سعی در ارایه بهترین نتایج برای شما عزیزان دارد",
    ],
  };
  aboutٍد: any = {
    title: "Who We Are",
    descriptions: [
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    ],
  };

  constructor() { }

  ngOnInit() {
  }

}
