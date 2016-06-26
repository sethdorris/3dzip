import {Component, OnInit} from '@angular/core';
import {JsonDataService} from './JsonDataService';
import {Router} from '@angular/router';

@Component({
    selector: 'success',
    templateUrl: './app/success.html'
})

export class SuccessComponent implements OnInit{
    data: any;
    File: string;
    router: Router;
    constructor(service: JsonDataService, _router: Router) {
        this.router = _router;
        this.data = service.getData();
        this.File = service.getFileName();
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
    }
}