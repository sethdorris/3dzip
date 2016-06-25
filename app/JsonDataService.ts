import { Injectable } from '@angular/core';

@Injectable()
export class JsonDataService {
    data: JSON;
    fileName: string;
    constructor() { }
    setData(data: JSON) {
        this.data = data;
        return true;
    }
    getData() {
        return this.data;
    }
    setFileName(_name: string) {
        this.fileName = _name;
        return this.fileName;
    }
    getFileName() {
        return this.fileName;
    }
}
