import {Pipe, PipeTransform} from '@angular/core';

import {Guide} from './guide';

@Pipe({name: 'keywordsFilter'})
export class KeywordsFilter implements PipeTransform {
    transform(allGuides: Guide[], keyword) {
        return allGuides.filter(function (guide) {
            if (keyword === '') {
                return guide;
            }

            if (guide.keywords.indexOf(keyword) !== -1) {
                return guide;
            }
        });
    }
}