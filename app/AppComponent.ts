import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { JsonDataService } from './JsonDataService';

@Component({
    selector: 'app',
    template: `
            <router-outlet></router-outlet>
            `,
    directives: [ROUTER_DIRECTIVES],
    providers: [JsonDataService]
})

export class AppComponent {
    public JsonData: string;
};