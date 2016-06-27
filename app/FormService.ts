import {Injectable} from '@angular/core';

@Injectable() 
export class FormService {
    FormData: Object;
    constructor() {}
    setFormData(data: Object) {
        this.FormData = data;
        return this.FormData;
    }
    getFormData() {
        return this.FormData;
    }
}