import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-templated-list',
  templateUrl: './templated-list.component.html',
  styleUrls: ['./templated-list.component.css']
})
export class TemplatedListComponent {

  @Input()
  items : Array<{title : string}> = [];

  @ContentChild(TemplateRef)
  template! : TemplateRef<any>
}
