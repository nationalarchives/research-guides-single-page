import { Injectable } from '@angular/core';

import { Guide } from './guide';

import { GUIDES } from './mock-guides';

@Injectable()
export class GuideService {
    getGuides(): Guide[] {
        return GUIDES;
    }
}