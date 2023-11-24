import { Component, ComponentFactoryResolver, ComponentRef, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicContentSample01Component } from '../dynamic-content-sample-01/dynamic-content-sample-01.component';
import { DynamicContentSample02Component } from '../dynamic-content-sample-02/dynamic-content-sample-02.component';
import { UnknownDynamicContentComponent } from '../unknown-dynamic-content/unknown-dynamic-content.component';

type MapType =  {
  [id: string] : any
};

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.css']
})
export class DynamicContentComponent implements OnInit, OnDestroy {

  private componentRef? : ComponentRef<{}>;


  @ViewChild('container', {read : ViewContainerRef})
  container? : ViewContainerRef;

  @Input()
  type! : string

  mappings : MapType = {
    'sample1' : DynamicContentSample01Component,
    'sample2' : DynamicContentSample02Component
  }

  getComponentType(typeName : string) {
    let type = this.mappings[typeName];
    return type || UnknownDynamicContentComponent;
  }

  ngOnInit(): void {
    if(this.type) {
      const componentType = this.getComponentType(this.type);
      this.componentRef = this.container?.createComponent(componentType);
    }
  }

  ngOnDestroy(): void {
    if(this.componentRef) {
      this.componentRef.destroy();
      // this.componentRef = null;
    }
  }

}
