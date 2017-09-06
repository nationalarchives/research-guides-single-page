import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {SearchGuideNameFilter} from "./search-guide-name-filter.pipe";
import {AllRecordsAvailableOnlineFilter} from "./all-records-available-online.pipe";

@NgModule({
    declarations: [
        AppComponent,
        SearchGuideNameFilter,
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
