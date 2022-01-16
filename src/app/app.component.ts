import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //we can also construct our template here only by defining template keyword and using `` to write js code in it.
  //but to code to look clean,separate file is used.
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mummas Kitchen';
}
