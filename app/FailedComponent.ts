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
    statusElements: any[];
    showPrinter: boolean;
    showExtrusionMass: boolean;
    showRafts: boolean;


    constructor(dataService: JsonDataService, _router: Router) {
        this.router = _router;
        this.JsonService = dataService;
        this.data = this.JsonService.getData();
        this.file = this.JsonService.getFileName();
        this.statusElements = [];
        console.log(this.file);
        this.showPrinter = false;
        this.showRafts = false;
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

        this.statusElements.push(printerStatus);
        this.statusElements.push(extrusionStatus);
        this.statusElements.push(raftsStatus);
        this.statusElements.push(layerStatus);
        this.statusElements.push(supportsStatus);
        this.statusElements.push(infillStatus);
        this.statusElements.push(extruderStatus);
        this.statusElements.push(materialStatus);

        console.log(this.statusElements);

        this.data.machine_config.extruder_profiles.attached_extruders.forEach((item) => {
            if (item.id !== 8 || item.calibrated == false) {
                console.log(extruderStatus);
                extruderStatus.style.backgroundColor = "greenyellow";
            }
        });

        if (this.data.bot_type == "replicator_5") {
            printerStatus.style.backgroundColor = "greenyellow";
        } else {
            printerStatus.style.backgroundColor = "red";
        }
        if (this.data.miracle_config.doRaft == true) {
            raftsStatus.style.backgroundColor = "greenyellow";
        } else {
            raftsStatus.style.backgroundColor = "red";
        }
        if (this.data.miracle_config.doSupport == true) {
            supportsStatus.style.backgroundColor = "greenyellow";
        } else {
            supportsStatus.style.backgroundColor = "red";
        }
        if (this.data.miracle_config.layerHeight >= .2 && this.data.miracle_config.layerHeight <= .3) {
            layerStatus.style.backgroundColor = "greenyellow";
        } else {
            layerStatus.style.backgroundColor = "red";
        }
        if (this.data.miracle_config.infillDensity <= .1) {
            infillStatus.style.backgroundColor = "greenyellow";
        } else {
            infillStatus.style.backgroundColor = "red";
        }
        if (this.data.material == "PLA") {
            materialStatus.style.backgroundColor = "greenyellow";
        } else {
            materialStatus.style.backgroundColor = "red";
        }
        if (this.data.extrusion_mass_g < 100) {
            extrusionStatus.style.backgroundColor = "greenyellow";
        } else {
            extrusionStatus.style.backgroundColor = "red";
        }
    }
    elementInfo(e) {
        console.log(e);
        switch (e.target.id) {
            case "printertype":
                this.showPrinter = true;
            case "rafts":
                this.showRafts = true;
        }
    }
}