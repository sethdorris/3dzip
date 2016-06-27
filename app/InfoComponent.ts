import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {FormService} from './FormService';

@Component({
    selector: 'info',
    templateUrl: './app/Info.html',
    directives: [ROUTER_DIRECTIVES]
})
export class InfoComponent {
    router: Router;
    FormInfo: Object;
    formService: FormService;
    constructor(_formService: FormService, _router: Router) {
        this.router = _router;
        this.formService = _formService;
        this.FormInfo = {
            FirstName: "",
            LastName: "",
            Email: "",
            PersonType: "",
            Campus: "",
            Purpose: "",
            Description: ""
        }
    }
    infoNextBtn() {
        console.log("clicked");
        var FormResult = this.formService.setFormData(this.FormInfo);
        console.log(FormResult);

        //this.router.navigate(['/upload']);
    }
};