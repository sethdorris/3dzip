import { Component } from '@angular/core';
import { JsonDataService } from './JsonDataService';
import { Router } from '@angular/router';

@Component({
    selector: 'failed',
    template: 
            `
            <div class="container">
                <h1>3D Model Checkup</h1>
                
            </div>
            `
})
export class FailedComponent {
    data: JSON;
    router: Router;
    JsonService: JsonDataService;
    file: string;

    constructor(dataService: JsonDataService, _router: Router) {
        this.router = _router;
        this.JsonService = dataService;
        this.data = this.JsonService.getData();
        this.file = this.JsonService.getFileName();
        console.log(this.file)
    }
}