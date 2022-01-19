import { Component, OnInit } from '@angular/core';
import { faHome,faInfo,faList,faAddressCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  faHome=faHome;
  faInfo=faInfo;
  faList=faList;
  faAdressCard=faAddressCard;

  ngOnInit(): void {
  }

}
