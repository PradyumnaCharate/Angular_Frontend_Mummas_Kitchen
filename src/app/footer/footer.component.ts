import { Component, OnInit } from '@angular/core';
import { faPhone,faFax,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGooglePlus,faFacebook,faLinkedin,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faPhone=faPhone;
  faFax=faFax;
  faEnvelope=faEnvelope;
  faGooglePlus=faGooglePlus;
  faFacebook=faFacebook;
  faLinkedin=faLinkedin;
  faTwitter=faTwitter;
  faYoutube=faYoutube;
  constructor() { }

  ngOnInit(): void {
  }

}
