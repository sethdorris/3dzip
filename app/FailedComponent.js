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
var FailedComponent = (function () {
    function FailedComponent(dataService, _router) {
        this.router = _router;
        this.JsonService = dataService;
        this.data = this.JsonService.getData();
        this.file = this.JsonService.getFileName();
        console.log(this.file);
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
        this.data.machine_config.extruder_profiles.attached_extruders.forEach(function (item) {
            if (item.id !== 8 || item.calibrated == false) {
                console.log(extruderStatus);
                extruderStatus.style.backgroundColor = "lightgreen";
            }
        });
        if (this.data.bot_type == "replicator_5") {
            printerStatus.style.backgroundColor = "lightgreen";
        }
        else {
            printerStatus.style.backgroundColor = "red";
        }
        if (this.data.miracle_config.doRaft == true) {
            raftsStatus.style.backgroundColor = "lightgreen";
        }
        else {
            raftsStatus.style.backgroundColor = "red";
        }
        if (this.data.miracle_config.doSupport == true) {
            supportsStatus.style.backgroundColor = "lightgreen";
        }
        else {
            supportsStatus.style.backgroundColor = "red";
        }
        if (this.data.miracle_config.layerHeight >= .2 && this.data.miracle_config.layerHeight <= .3) {
            layerStatus.style.backgroundColor = "lightgreen";
        }
        else {
            layerStatus.style.backgroundColor = "red";
        }
        if (this.data.miracle_config.infillDensity <= .1) {
            infillStatus.style.backgroundColor = "lightgreen";
        }
        else {
            infillStatus.style.backgroundColor = "red";
        }
        if (this.data.material == "PLA") {
            materialStatus.style.backgroundColor = "lightgreen";
        }
        else {
            materialStatus.style.backgroundColor = "red";
        }
    };
    FailedComponent = __decorate([
        core_1.Component({
            selector: 'failed',
            templateUrl: './app/Failed.html'
        }), 
        __metadata('design:paramtypes', [JsonDataService_1.JsonDataService, router_1.Router])
    ], FailedComponent);
    return FailedComponent;
}());
exports.FailedComponent = FailedComponent;
//# sourceMappingURL=FailedComponent.js.map