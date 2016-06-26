import {provideRouter, RouterConfig} from '@angular/router';
import {InfoComponent} from './InfoComponent';
import {UploadComponent} from './UploadComponent';
import {FailedComponent} from './FailedComponent';
import {SuccessComponent} from './SuccessComponent';

export const routes: RouterConfig = [
    { path: '', component: InfoComponent },
    { path: 'upload', component: UploadComponent },
    { path: 'failed', component: FailedComponent },
    { path: 'success', component: SuccessComponent }

]

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];