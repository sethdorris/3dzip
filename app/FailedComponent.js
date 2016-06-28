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
var router_1 = require('@angular/router');
var FormService_1 = require('./FormService');
var FailedComponent = (function () {
    function FailedComponent(dataService, _router, _formService) {
        this.router = _router;
        this.JsonService = dataService;
        this.data = this.JsonService.getData();
        this.file = this.JsonService.getFileName();
        this.formService = _formService;
        this.statusElements = [];
        console.log(this.file);
        this.showPrinter = false;
        this.showRafts = false;
        this.showExtrusionMass = false;
        this.showExtruder = false;
        this.showSupport = false;
        this.showInfill = false;
        this.showMaterial = false;
        this.database = firebase.database();
    }
    FailedComponent.prototype.ngOnInit = function () {
        var printerStatus = document.getElementById("printertype");
        var extrusionStatus = document.getElementById("extrusionmass");
        var raftsStatus = document.getElementById("rafts");
        var layerStatus = document.getElementById("layerheight");
        var supportsStatus = document.getElementById("supports");
        var infillStatus = document.getElementById("infill");
        var extruderStatus = document.getElementById("extruder");
        var materialStatus = document.getElementById("material");
        this.statusElements.push(printerStatus);
        this.statusElements.push(extrusionStatus);
        this.statusElements.push(raftsStatus);
        this.statusElements.push(layerStatus);
        this.statusElements.push(supportsStatus);
        this.statusElements.push(infillStatus);
        this.statusElements.push(extruderStatus);
        this.statusElements.push(materialStatus);
        var checkInfo = {
            Status: "Failed",
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
        console.log(this.statusElements);
        this.data.machine_config.extruder_profiles.attached_extruders.forEach(function (item) {
            if (item.id !== 8 || item.calibrated == false) {
                console.log(extruderStatus);
                extruderStatus.style.backgroundColor = "greenyellow";
            }
        });
        if (this.data.bot_type == "replicator_5") {
            printerStatus.style.backgroundColor = "greenyellow";
        }
        else {
            printerStatus.style.backgroundColor = "red";
        }
        if (this.data.miracle_config.doRaft == true) {
            raftsStatus.style.backgroundColor = "greenyellow";
        }
        else {
            raftsStatus.style.backgroundColor = "red";
        }
        if (this.data.miracle_config.doSupport == true) {
            supportsStatus.style.backgroundColor = "greenyellow";
        }
        else {
            supportsStatus.style.backgroundColor = "red";
        }
        if (this.data.miracle_config.layerHeight >= .2 && this.data.miracle_config.layerHeight <= .3) {
            layerStatus.style.backgroundColor = "greenyellow";
        }
        else {
            layerStatus.style.backgroundColor = "red";
        }
        if (this.data.miracle_config.infillDensity <= .1) {
            infillStatus.style.backgroundColor = "greenyellow";
        }
        else {
            infillStatus.style.backgroundColor = "red";
        }
        if (this.data.material == "PLA") {
            materialStatus.style.backgroundColor = "greenyellow";
        }
        else {
            materialStatus.style.backgroundColor = "red";
        }
        if (this.data.extrusion_mass_g < 100) {
            extrusionStatus.style.backgroundColor = "greenyellow";
        }
        else {
            extrusionStatus.style.backgroundColor = "red";
        }
        var FormData = this.formService.getFormData();
    };
    FailedComponent.prototype.elementInfo = function (e) {
        console.log(e);
        switch (e.target.id) {
            case "printertype":
                this.showPrinter = false;
                break;
            case "rafts":
                this.showRafts = false;
                break;
            case "extrusionmass":
                this.showExtrusionMass = false;
                break;
            case "layerheight":
                this.showLayer = false;
                break;
            case "supports":
                this.showSupport = false;
                break;
            case "infill":
                this.showInfill = false;
                break;
            case "extruder":
                this.showExtruder = false;
                break;
            case "material":
                this.showMaterial = false;
                break;
            default: break;
        }
    };
    FailedComponent = __decorate([
        core_1.Component({
            selector: 'failed',
            templateUrl: './app/Failed.html'
        }), 
        __metadata('design:paramtypes', [JsonDataService_1.JsonDataService, router_1.Router, FormService_1.FormService])
    ], FailedComponent);
    return FailedComponent;
}());
exports.FailedComponent = FailedComponent;
//# sourceMappingURL=FailedComponent.js.map