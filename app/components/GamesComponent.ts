import {Component, View} from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
  selector: 'games',
  templateUrl: `./app/views/games.html`
})

export class GamesComponent {
    
    constructor(private _router: Router) {}
  
    goTo(link: String) {
        this._router.navigate([link]);
    }
}
