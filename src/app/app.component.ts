import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DynamicContentDemo';

  listItems : Array<{title : string}> = [
    {title : 'title1'},
    {title : 'title2'},
    {title : 'title3'},
  ];
}
