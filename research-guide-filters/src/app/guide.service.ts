import { Injectable } from '@angular/core';

import { Guide } from './guide';

@Injectable()
export class GuideService {

    getGuideName(element): string {
        return element.querySelector('.research-guide-title-js').innerHTML;
    }

    getGuideHref(element): string {
        return element.querySelector('.research-guide-title-js').href;
    }

    getRecommendedStatus(element): boolean {
        return /.*rg\-recommended/.test(element.className);
    }

    getAllAvailableOnlineStatus(element): boolean {
        return !!element.querySelector('.rg-label-all');
    }

    getGuides(): Guide[] {

        let research_guide_elements = document.getElementsByClassName('research-guide-js');
        let guides: Guide[] = [];

        for (let i = 0; i < research_guide_elements.length; i++) {
            let element = research_guide_elements[ i ];

            let name = this.getGuideName(element);
            let recommended = this.getRecommendedStatus(element);
            let href = this.getGuideHref(element);
            let all_records_available_online = this.getAllAvailableOnlineStatus(element);

            guides.push(new Guide(name, recommended, href, all_records_available_online));
        }

        return guides;
    }
}