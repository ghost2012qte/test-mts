import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlMask } from './classes/url-mask';

@Injectable({
    providedIn: 'root'
})
export class UrlService {

    mask: UrlMask;

    constructor(
        private route: ActivatedRoute,
        private router: Router)
    {
        this.mask = new  UrlMask({
            tab: '2',
            sort: '',
            filter: ''
        })

        this.route.queryParams.subscribe(params => {})
    }

    pushToMask(key: string, value: string) {
        this.mask.setKey(key, value);
        this.router.navigate(['/'], {queryParams: this.mask.mask});
    }
}
