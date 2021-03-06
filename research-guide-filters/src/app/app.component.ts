import {Component} from '@angular/core';

import {GuideService} from './guide.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [GuideService]
})

export class AppComponent {
    guides = this.guideService.getGuides();
    filters = {
        nameContains: '',
        allRecordsAvailableOnline: false,
        keyword: ''
    };

    addKeywordFilter(event: any) {
        this.filters.keyword = event.srcElement.textContent;
    }

    constructor(private guideService: GuideService) {
    }
}
