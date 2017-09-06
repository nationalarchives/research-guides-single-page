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
    showRecommendedOnly = false;
    filterText = '';

    changeShowingRecommendedOnly() {
        this.showRecommendedOnly = !this.showRecommendedOnly;
    }

    constructor(private guideService: GuideService) {
    };
}
