import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { UrlMask } from 'src/app/classes/url-mask';
import { UrlService } from 'src/app/url.service';
import { concatAll, take, toArray } from 'rxjs/operators';
import { IChannel } from 'src/app/app.types';

@Component({
    selector: 'app-channels-page',
    templateUrl: './channels-page.component.html',
    styleUrls: ['./channels-page.component.scss']
})
export class ChannelsPageComponent implements OnInit {

    mask: UrlMask;
    channels: IChannel;



    constructor(
        private appService: AppService,
        private urlService: UrlService) { }

    ngOnInit() {
        this.appService
            .getChannels()
            .pipe(
                // @ts-ignore
                concatAll(),
                take(24),
                toArray()
            )
            .subscribe(channels => {
                // this.channels = channels;
                console.log(channels);
            })
    }

}
