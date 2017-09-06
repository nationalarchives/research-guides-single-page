import {Injectable} from '@angular/core';

import {Guide} from './guide';

@Injectable()
export class GuideService {

    getGuideName(element): string {
        return element.querySelector('.research-guide-title-js').innerHTML;
    }

    getGuideHref(element): string {
        return element.querySelector('.research-guide-title-js').href;
    }

    getAllRecordsAvailableOnlineStatus(element): boolean {
        return /.*all\-available\-online\-js/.test(element.className);
    }

    getGuides(): Guide[] {

        const research_guide_elements = document.getElementsByClassName('research-guide-js'),
            guides: Guide[] = [];

        for (let i = 0; i < research_guide_elements.length; i++) {
            const element = research_guide_elements[i],
                name = this.getGuideName(element),
                href = this.getGuideHref(element),
                allRecordsAvailableOnline = this.getAllRecordsAvailableOnlineStatus(element);

            guides.push(new Guide(name, href, allRecordsAvailableOnline));
        }

        return guides;
    }
}