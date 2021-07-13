import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlService } from './url.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    
    selectedTabIndex = 2;

    constructor(
        public urlMask: UrlService,
        private router: Router,
        private route: ActivatedRoute) {}

    ngOnInit() {

        this.route.queryParams.subscribe(params => {
            
        })

    }



}
