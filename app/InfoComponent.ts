import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'info',
    templateUrl: './app/Info.html',
    directives: [ROUTER_DIRECTIVES]
})
export class InfoComponent {
    router: Router;
    constructor(_router: Router) {
        this.router = _router;
    }
    infoNextBtn() {
        console.log("clicked");
        this.router.navigate(['/upload']);
    }
};