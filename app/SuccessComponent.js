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
var JsonDataService_1 = require('./JsonDataService');
var FormService_1 = require('./FormService');
var router_1 = require('@angular/router');
var SuccessComponent = (function () {
    function SuccessComponent(service, _router, _formService) {
        this.router = _router;
        this.data = service.getData();
        this.File = service.getFileName();
        this.database = firebase.database();
        this.formService = _formService;
    }
    SuccessComponent.prototype.ngOnInit = function () {
        var printerStatus = document.getElementById("printertype");
        var extrusionStatus = document.getElementById("extrusionmass");
        var raftsStatus = document.getElementById("rafts");
        var layerStatus = document.getElementById("layerheight");
        var supportsStatus = document.getElementById("supports");
        var infillStatus = document.getElementById("infill");
        var extruderStatus = document.getElementById("extruder");
        var materialStatus = document.getElementById("material");
        printerStatus.style.backgroundColor = "lightgreen";
        extrusionStatus.style.backgroundColor = "lightgreen";
        raftsStatus.style.backgroundColor = "lightgreen";
        layerStatus.style.backgroundColor = "lightgreen";
        supportsStatus.style.backgroundColor = "lightgreen";
        infillStatus.style.backgroundColor = "lightgreen";
        extruderStatus.style.backgroundColor = "lightgreen";
        materialStatus.style.backgroundColor = "lightgreen";
        var checkInfo = {
            Status: "Success",
            Printer_Type: this.data.bot_type,
            Extruder_Profiles: this.data.machine_config.extruder_profiles.attached_extruders,
            Extrusion_Mass: this.data.extrusion_mass_g,
            Rafts: this.data.miracle_config.doRaft,
            Layer_Height: this.data.miracle_config.layerHeight,
            Infill: this.data.miracle_config.infillDensity,
            Material: this.data.material,
            Support: this.data.miracle_config.doSupport
        };
        this.database.ref('/Checkups').push({
            UserData: this.formService.getFormData(),
            CheckData: checkInfo
        });
    };
    SuccessComponent = __decorate([
        core_1.Component({
            selector: 'success',
            templateUrl: './app/success.html'
        }), 
        __metadata('design:paramtypes', [JsonDataService_1.JsonDataService, router_1.Router, FormService_1.FormService])
    ], SuccessComponent);
    return SuccessComponent;
}());
exports.SuccessComponent = SuccessComponent;
//# sourceMappingURL=SuccessComponent.js.map