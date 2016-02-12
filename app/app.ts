import {provide, Component} from '../node_modules/angular2/core';
import {bootstrap} from '../node_modules/angular2/platform/browser';
import {
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
    HashLocationStrategy,
    LocationStrategy,
    RouteConfig,
} from '../node_modules/angular2/router';

import {HomeComponent} from './components/HomeComponent';

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
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
        <div class="row">
            <router-outlet></router-outlet>
        </div>
  `
})
@RouteConfig([
    { path: '/', name: 'root', redirectTo: ['/Home'] },
    { path: '/home', name: 'Home', component: HomeComponent }
])
export class App { }

bootstrap(App, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]);