import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { JsonDataService } from './JsonDataService';
import { FormService } from './FormService';

@Component({
    selector: 'app',
    template: `
            <router-outlet></router-outlet>
            `,
    directives: [ROUTER_DIRECTIVES],
    providers: [JsonDataService, FormService]
})

export class AppComponent {
    public JsonData: string;
};