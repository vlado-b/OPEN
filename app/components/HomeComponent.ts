import {Component, View} from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
  selector: 'home',
  templateUrl: `./app/views/home.html`
})

export class HomeComponent {
    
    constructor(private _router: Router) {}
  
    goTo(link: String) {
        this._router.navigate([link]);
    }
}
