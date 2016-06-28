import {Component, OnInit} from '@angular/core';
import {JsonDataService} from './JsonDataService';
import {FormService} from './FormService';
import {Router} from '@angular/router';
declare var firebase;

@Component({
    selector: 'success',
    templateUrl: './app/success.html'
})

export class SuccessComponent implements OnInit{
    data: any;
    File: string;
    router: Router;
    database;
    formService: FormService;
    constructor(service: JsonDataService, _router: Router, _formService: FormService) {
        this.router = _router;
        this.data = service.getData();
        this.File = service.getFileName();
        this.database = firebase.database();
        this.formService = _formService;
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
        }

        this.database.ref('/Checkups').push({
            UserData: this.formService.getFormData(),
            CheckData: checkInfo
        });
    }
}