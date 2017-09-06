import {Pipe, PipeTransform} from '@angular/core';

import {Guide} from './guide';

@Pipe({name: 'allRecordsAvailableOnlineFilter'})
export class AllRecordsAvailableOnlineFilter implements PipeTransform {
    transform(allGuides: Guide[], isFilterActive) {
        return allGuides.filter(function (guide) {
            if (isFilterActive === false) {
                return guide;
            }
            if (guide.allRecordsAvailableOnline === true) {
                return guide;
            }
        });
    }
}
