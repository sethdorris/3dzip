import {provideRouter, RouterConfig} from '@angular/router';
import {InfoComponent} from './InfoComponent';
import {UploadComponent} from './UploadComponent';
import {FailedComponent} from './FailedComponent';

export const routes: RouterConfig = [
    { path: '', component: InfoComponent },
    { path: 'upload', component: UploadComponent },
    { path: 'failed', component: FailedComponent }

]

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];