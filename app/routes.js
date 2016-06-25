"use strict";
var router_1 = require('@angular/router');
var InfoComponent_1 = require('./InfoComponent');
var UploadComponent_1 = require('./UploadComponent');
var FailedComponent_1 = require('./FailedComponent');
exports.routes = [
    { path: '', component: InfoComponent_1.InfoComponent },
    { path: 'upload', component: UploadComponent_1.UploadComponent },
    { path: 'failed', component: FailedComponent_1.FailedComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=routes.js.map