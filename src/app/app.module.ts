import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatedListComponent } from './templated-list/templated-list.component';
import { DynamicContentComponent } from './dynamic-content/dynamic-content.component';
import { DynamicContentSample01Component } from './dynamic-content-sample-01/dynamic-content-sample-01.component';
import { DynamicContentSample02Component } from './dynamic-content-sample-02/dynamic-content-sample-02.component';
import { UnknownDynamicContentComponent } from './unknown-dynamic-content/unknown-dynamic-content.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplatedListComponent,
    DynamicContentComponent,
    DynamicContentSample01Component,
    DynamicContentSample02Component,
    UnknownDynamicContentComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
