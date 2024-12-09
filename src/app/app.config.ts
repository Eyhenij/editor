import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideRtIDBStorage, provideRtStorage, provideRtUi, provideRtUtils } from 'rt-tools';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),

        // Rt-tools
        provideRtUtils(),
        provideRtStorage(),
        provideRtUi(),
        provideRtIDBStorage(),
    ]
};
