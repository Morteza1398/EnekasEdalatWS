import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: any = {
    title: "Get In Touch",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    name: "Name",
    email: "Email",
    phone: "Phone",
    address: "Address",
    message: "Message",
    btn: "Send Message",
    myemail: "info@enekasedalat.com",
    myphone: "+ (98) 911 218 1094",
    myaddress: "Iran, Mazandaran, Babol, Modarrs ST, Sarmayeh building, unit 17"
  };

  constructor() { }

  ngOnInit() {
  }

}
