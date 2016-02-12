import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
//import { routerInjectables } from 'angular2/router';

@Component({
    selector: 'app',
    template: `
        <div class="row">
            <div class="col-md-3 main-tiles">
                <p>Креирај нов профил</p>
            </div>
            <div class="col-md-3 main-tiles">
                <p>Логирај се</p>
            </div>
            <div class="col-md-3 main-tiles">
                <p>Подесување на постоечки профил</p>
            </div>
            <div class="col-md-3 main-tiles">
                <p>Одбери игра</p>
            </div>
        </div>
  `
})

// @RouteConfig([
//   { path:'/games', name: 'Games', component: CrisisListComponent }
// ])

export class App { }

bootstrap(App);