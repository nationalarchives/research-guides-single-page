import {Pipe, PipeTransform} from '@angular/core';

import {Guide} from './guide';

@Pipe({name: 'guideFilter'})
export class GuideFilter implements PipeTransform {
    transform(allGuides: Guide[], filterText) {
        return allGuides.filter(function (guide) {

            if (filterText === '') {
                return guide;
            }

            const guideNameNoSpacesLowerCase = guide.name.split(' ').join('').toLowerCase(),
                filterTextNoSpacesLowerCase = filterText.split(' ').join('').toLowerCase();

            if (guideNameNoSpacesLowerCase.indexOf(filterTextNoSpacesLowerCase) !== -1) {
                return guide;
            }
        });
    }
}