import {Component, OnInit} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {FormService} from './FormService';

@Component({
    selector: 'info',
    templateUrl: './app/Info.html',
    directives: [ROUTER_DIRECTIVES]
})
export class InfoComponent implements OnInit {
    router: Router;
    FormInfo: any;
    formService: FormService;
    constructor(_formService: FormService, _router: Router) {
        this.router = _router;
        this.formService = _formService;
        this.FormInfo = {
            FirstName: null,
            LastName: null,
            Email: null,
            PersonType: null,
            Campus: null,
            Purpose: null,
            Description: null
        }
    }

    ngOnInit() {

    }

    validateForm() {
        console.log("Hi");
    }

    infoNextBtn() {
        console.log("clicked");
        var FormResult = this.formService.setFormData(this.FormInfo);
        console.log(FormResult);

        //this.router.navigate(['/upload']);
    }
};