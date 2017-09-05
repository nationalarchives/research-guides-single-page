import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {GuideFilter} from "./guide-filter.pipe";

@NgModule({
    declarations: [
        AppComponent,
        GuideFilter
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
