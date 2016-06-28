import { Component, OnInit } from '@angular/core';
import { JsonDataService } from './JsonDataService';
import { Router } from '@angular/router';
import { FormService } from './FormService';
declare var firebase;


@Component({
    selector: 'failed',
    templateUrl: './app/Failed.html'
})
export class FailedComponent implements OnInit {
    data: any;
    router: Router;
    JsonService: JsonDataService;
    formService: FormService;
    file: string;
    statusElements: any[];
    showPrinter: boolean;
    showExtrusionMass: boolean;
    showRafts: boolean;
    showExtruder: boolean;
    showLayer: boolean;
    showSupport: boolean;
    showInfill: boolean;
    showMaterial: boolean;
    database;


    constructor(dataService: JsonDataService, _router: Router, _formService: FormService) {
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
        }

        this.database.ref('/Checkups').push({
            UserData: this.formService.getFormData(),
            CheckData: checkInfo
        });

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

        var FormData = this.formService.getFormData();
        


    }
    elementInfo(e) {
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
    }
}