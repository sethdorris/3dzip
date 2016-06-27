"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var FormService_1 = require('./FormService');
var InfoComponent = (function () {
    function InfoComponent(_formService, _router) {
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
        };
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent.prototype.validateForm = function () {
        var enableButton = true;
        for (var key in this.FormInfo) {
            if (this.FormInfo[key] == null) {
                enableButton = false;
            }
        }
        enableButton ? document.getElementById("form-next-btn").disabled = false : document.getElementById("form-next-btn").disabled = true;
    };
    InfoComponent.prototype.infoNextBtn = function () {
        var FormResult = this.formService.setFormData(this.FormInfo);
        this.router.navigate(['/upload']);
    };
    InfoComponent = __decorate([
        core_1.Component({
            selector: 'info',
            templateUrl: './app/Info.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [FormService_1.FormService, router_1.Router])
    ], InfoComponent);
    return InfoComponent;
}());
exports.InfoComponent = InfoComponent;
;
//# sourceMappingURL=InfoComponent.js.map