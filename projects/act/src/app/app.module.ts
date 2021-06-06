import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component'
import { MainComponent } from './main/main.component'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment'
import { AppRoutingModule } from './app.routing.module'
import { debug, disableLogging, sq } from 'x-utils-es'
import { ActComponentsModule } from '@act/components'
import { ThemeModule } from '@act/theme'
import { MaterialModule } from '@act/material'


// disable console.log
if (environment.production === true) {
    debug(`-- Using Angular 11.x --`)
    debug(`-- CONSOLE LOGS DISABLES --`)
    // tslint:disable-next-line: only-arrow-functions
    console.log = function() {}
    disableLogging()
}

@NgModule({
    declarations: [AppComponent, MainComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the app is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000',
        }),
        MaterialModule,
        ThemeModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ActComponentsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
