import {Pipe, PipeTransform} from '@angular/core';

import {Guide} from './guide';

@Pipe({name: 'isRecommended'})
export class IsRecommended implements PipeTransform {
    transform(allGuides: Guide[], showRecommendedOnly) {
        if (showRecommendedOnly) {
            return allGuides.filter(guide => guide.recommended);
        } else {
            return allGuides;
        }
    }
}