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

    constructor(private guideService: GuideService) {
    };
}
