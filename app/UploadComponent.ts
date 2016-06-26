import { Component } from '@angular/core';
import { JsonDataService } from './JsonDataService';
import { Router } from '@angular/router';
var jszip = require("jszip");


@Component({
    selector: 'upload',
    template: `
            <div class="container">
                <h1>3D Model Checkup</h1>
                <input type="file" id="myfile" class="form-control" />
	            <button id="submit" (click)="getFile()">Submit</button>
            </div>
    `
})
export class UploadComponent {
    JsonService: JsonDataService;
    router: Router;
    constructor(private DataService: JsonDataService, public _router: Router) {
        this.JsonService = DataService;
        this.router = _router;
    }
    getFile() {
        let Zipper = new jszip();
        var FileInput: any = document.getElementById('myfile');
        var FileToLoad = FileInput.files[0];
        var filereader = new FileReader();
        this.JsonService.setFileName(FileToLoad.name);
        
        filereader.onload = (event: any) => {
            Zipper.loadAsync(event.target.result).then((data) => {
                console.log("data", data.files);

                for (var item in data.files) {
                    console.log("file", item);
                    if (item == "meta.json") {
                        Zipper.file('meta.json').async('string').then((data) => {
                            var contents = JSON.parse(data);
                            var success = this.JsonService.setData(contents); 
                            console.log(contents);              
                            this.routeHandler(contents);
                        })
                    }
                }

            });
        }

        filereader.readAsArrayBuffer(FileToLoad);
    }
    routeHandler(data: any) {
        data.machine_config.extruder_profiles.attached_extruders.forEach((item) => {
            if (item.id !== 8 || item.calibrated == false) {
                this.router.navigate(['/failed']);
            }
        })

        if (
            data.bot_type == "replicator_5" &&
            data.material == "PLA" &&
            data.miracle_config.doRaft === true &&
            data.miracle_config.doSupport === true &&
            (data.miracle_config.layerHeight >= .2 && data.miracle_config.layerHeight <= .3) &&
            data.miracle_config.infillDensity <= .1
        ) {
            this.router.navigate(['/success']);
        }
            
    }
} 