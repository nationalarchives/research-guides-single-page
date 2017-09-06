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

    getKeywords(element): string[] {
        const keywords = [];
        const els = element.getElementsByClassName('tag');
        for (let j = 0; j < els.length; j++) {
            keywords.push(els[j].textContent);

        }
        return keywords;
    }

    getGuides(): Guide[] {

        const research_guide_elements = document.getElementsByClassName('research-guide-js'),
            guides: Guide[] = [];

        for (let i = 0; i < research_guide_elements.length; i++) {
            const element = research_guide_elements[i],
                name = this.getGuideName(element),
                href = this.getGuideHref(element),
                allRecordsAvailableOnline = this.getAllRecordsAvailableOnlineStatus(element),
                keywords = this.getKeywords(element);

            guides.push(new Guide(name, href, allRecordsAvailableOnline, keywords));
        }

        return guides;
    }
}