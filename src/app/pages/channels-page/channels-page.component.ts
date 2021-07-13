import { Component, OnInit } from '@angular/core';
import { UrlMask } from 'src/app/classes/url-mask';
import { UrlService } from 'src/app/url.service';

@Component({
    selector: 'app-channels-page',
    templateUrl: './channels-page.component.html',
    styleUrls: ['./channels-page.component.scss']
})
export class ChannelsPageComponent implements OnInit {

    mask: UrlMask;

    constructor(private urlService: UrlService) { }

    ngOnInit() {
        
    }

}
