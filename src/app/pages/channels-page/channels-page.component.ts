import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { UrlMask } from 'src/app/classes/url-mask';
import { UrlService } from 'src/app/url.service';
import { takeUntil } from 'rxjs/operators';
import { IChannel } from 'src/app/app.types';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-channels-page',
    templateUrl: './channels-page.component.html',
    styleUrls: ['./channels-page.component.scss']
})
export class ChannelsPageComponent implements OnInit, OnDestroy {

    mask: UrlMask;
    channels: IChannel[];

    channelsCount = 24;
    sort: string;
    filter: string;

    destroy$ = new Subject<void>();

    constructor(
        private appService: AppService,
        private urlService: UrlService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.queryParams
            .pipe(takeUntil(this.destroy$))
            .subscribe(params => {
                console.log(params);
                this.sort = params?.sort || null;
                this.filter = params?.filter || null;
                this.loadChannels();
            })

        this.appService.getGeneries().subscribe(console.log);
    }

    async loadChannels() {
        let channels = await this.appService.getChannels().toPromise();

        if (this.sort) {
            channels = channels.sort((a, b) => {
                if (a.name > b.name) return this.sort == 'asc' ?  1 : -1;
                if (a.name < b.name) return this.sort == 'asc' ?  -1 : 1;
                return 0;
            })
        }

        if (this.filter) {

        }

        this.channels = channels.slice(0, this.channelsCount);
        console.log(this.channels);
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    loadMore() {
        this.channelsCount += 12;
        this.loadChannels();
    }

    trackByChannelName(i: number, channel: IChannel) {
        return channel.name;
    }

}