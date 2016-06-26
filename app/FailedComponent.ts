import { Component, OnInit } from '@angular/core';
import { JsonDataService } from './JsonDataService';
import { Router } from '@angular/router';

@Component({
    selector: 'failed',
    templateUrl: './app/Failed.html'
})
export class FailedComponent implements OnInit {
    data: any;
    router: Router;
    JsonService: JsonDataService;
    file: string;

    constructor(dataService: JsonDataService, _router: Router) {
        this.router = _router;
        this.JsonService = dataService;
        this.data = this.JsonService.getData();
        this.file = this.JsonService.getFileName();
        console.log(this.file);
    }

    ngOnInit() {
        var printerStatus = document.getElementById("printertype");
        var extrusionStatus = document.getElementById("extrusionmass");
        var raftsStatus = document.getElementById("rafts");
        var layerStatus = document.getElementById("layerheight");
        var supportsStatus = document.getElementById("supports");
        var infillStatus = document.getElementById("infill");
        var extruderStatus = document.getElementById("extruder");
        var materialStatus = document.getElementById("material");

        this.data.machine_config.extruder_profiles.attached_extruders.forEach((item) => {
            if (item.id !== 8 || item.calibrated == false) {
                console.log(extruderStatus);
                extruderStatus.style.backgroundColor = "lightgreen";
            }
        });

        if (this.data.bot_type == "replicator_5") {
            printerStatus.style.backgroundColor = "lightgreen";
        } else {
            printerStatus.style.backgroundColor = "red";
        }
        if (this.data.miracle_config.doRaft == true) {
            raftsStatus.style.backgroundColor = "lightgreen";
        } else {
            raftsStatus.style.backgroundColor = "red";
        }
        if (this.data.miracle_config.doSupport == true) {
            supportsStatus.style.backgroundColor = "lightgreen";
        } else {
            supportsStatus.style.backgroundColor = "red";
        }
        if (this.data.miracle_config.layerHeight >= .2 && this.data.miracle_config.layerHeight <= .3) {
            layerStatus.style.backgroundColor = "lightgreen";
        } else {
            layerStatus.style.backgroundColor = "red";
        }
        if (this.data.miracle_config.infillDensity <= .1) {
            infillStatus.style.backgroundColor = "lightgreen";
        } else {
            infillStatus.style.backgroundColor = "red";
        }
        if (this.data.material == "PLA") {
            materialStatus.style.backgroundColor = "lightgreen";
        } else {
            materialStatus.style.backgroundColor = "red";
        }

    }
}