import { Injectable, Type } from '@angular/core';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  getAds() : any[] {
    return [
      {
        component : HeroProfileComponent,
        inputs : {name : 'Dr , IQ', bio : 'Bamrt as they com'},
      },
      {
        component : HeroProfileComponent,
        inputs : {name : 'Bombasto', bio : 'Brave as they com'},
      },
      {
        component : HeroJobAdComponent,
        inputs : {headline : 'Hiring for several positions', body : 'Submit your resume today!'},
      },
      {
        component : HeroJobAdComponent,
        inputs : {headline : 'Openings in all departments', body : 'Apply today'},
      },
    ] as {component : Type<any>, inputs : Record<string, unknown>}[];
  }

  constructor() { }
}
