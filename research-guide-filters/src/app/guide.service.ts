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

    getGuides(): Guide[] {

        let research_guide_elements = document.getElementsByClassName('research-guide-js');
        let guides: Guide[] = [];

        for (let i = 0; i < research_guide_elements.length; i++) {
            let element = research_guide_elements[ i ];

            let name = this.getGuideName(element);
            let href = this.getGuideHref(element);

            guides.push(new Guide(name, href));
        }

        return guides;
    }
}