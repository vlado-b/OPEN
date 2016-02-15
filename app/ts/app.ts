import {provide, Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, HashLocationStrategy, LocationStrategy, RouteConfig} from 'angular2/router';


import {HomeComponent} from '../components/HomeComponent';
import {GamesComponent} from '../components/GamesComponent';

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: `./app/views/main.html`,
})

@RouteConfig([
    { path: '/', name: 'root', redirectTo: ['/Home'] },
    { path: '/home', name: 'Home', component: HomeComponent },
    { path: '/games', name: 'Games', component: GamesComponent }
])
export class App {}

bootstrap(App, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);