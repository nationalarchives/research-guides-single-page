import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {IsRecommended} from "./is-recommended.pipe";

@NgModule({
    declarations: [
        AppComponent,
        IsRecommended
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
