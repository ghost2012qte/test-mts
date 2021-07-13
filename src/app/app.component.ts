import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    
    selectedTabIndex = 2;

    constructor(
        private router: Router,
        private route: ActivatedRoute) {}

    ngOnInit() {

        this.route.queryParams.subscribe(params => {
            
        })

    }



}
