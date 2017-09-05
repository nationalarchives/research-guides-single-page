import { Component } from '@angular/core';

import { GuideService } from './guide.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ],
    providers: [ GuideService ]
})

export class AppComponent {
    title = 'Research guides';
    guides = this.guideService.getGuides();

    showRecommendedOnly = false;

    changeShowingRecommendedOnly() {
        this.showRecommendedOnly = !this.showRecommendedOnly;
    }

    showingRecommendedOnlyMessage = 'I am in the app component';

    constructor(private guideService: GuideService) {
    };
}
