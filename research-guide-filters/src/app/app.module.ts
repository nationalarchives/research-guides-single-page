import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {GuideFilter} from "./guide-filter.pipe";
import {AllRecordsAvailableOnlineFilter} from "./all-records-available-online.pipe";

@NgModule({
    declarations: [
        AppComponent,
        GuideFilter,
        AllRecordsAvailableOnlineFilter
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
