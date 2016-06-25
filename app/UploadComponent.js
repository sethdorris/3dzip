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
var jszip = require("jszip");
var UploadComponent = (function () {
    function UploadComponent(DataService, _router) {
        this.DataService = DataService;
        this._router = _router;
        this.JsonService = DataService;
        this.router = _router;
    }
    UploadComponent.prototype.getFile = function () {
        var _this = this;
        var Zipper = new jszip();
        var FileInput = document.getElementById('myfile');
        var FileToLoad = FileInput.files[0];
        var filereader = new FileReader();
        this.JsonService.setFileName(FileToLoad.name);
        filereader.onload = function (event) {
            Zipper.loadAsync(event.target.result).then(function (data) {
                console.log("data", data.files);
                for (var item in data.files) {
                    console.log("file", item);
                    if (item == "meta.json") {
                        Zipper.file('meta.json').async('string').then(function (data) {
                            var contents = JSON.parse(data);
                            var success = _this.JsonService.setData(contents);
                            console.log(contents);
                            _this.routeHandler(contents);
                        });
                    }
                }
            });
        };
        filereader.readAsArrayBuffer(FileToLoad);
    };
    UploadComponent.prototype.routeHandler = function (data) {
        var _this = this;
        data.machine_config.extruder_profiles.attached_extruders.forEach(function (item) {
            if (item.id !== 8) {
                _this.router.navigate(['/failed']);
            }
        });
        //if (
        //    data.bot_type == "replicator_5" &&
        //    data.material == "PLA" &&
        //    data.miracle_config.doRaft === true &&
        //    data.miracle_config.doSupport === true &&
        //    (data.miracle_config.layerHeight >= .2 && data.miracle_config.layerHeight <= .3) &&
        //    data.miracle_config.infillDensity <= .1 &&
        //    data.machine_config.extruder_profiles.
    };
    UploadComponent = __decorate([
        core_1.Component({
            selector: 'upload',
            template: "\n            <div class=\"container\">\n                <h1>3D Model Checkup</h1>\n                <input type=\"file\" id=\"myfile\" class=\"form-control\" />\n\t            <button id=\"submit\" (click)=\"getFile()\">Submit</button>\n            </div>\n    "
        }), 
        __metadata('design:paramtypes', [JsonDataService_1.JsonDataService, router_1.Router])
    ], UploadComponent);
    return UploadComponent;
}());
exports.UploadComponent = UploadComponent;
//# sourceMappingURL=UploadComponent.js.map