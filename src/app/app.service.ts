import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { concatAll, distinct, filter, map, reduce, toArray } from "rxjs/operators";
import { AppApiService } from "./app.service.api";
import { IChannel, IGenre } from "./app.types";

@Injectable({ providedIn: 'root' })
export class AppService {

    constructor(private apiService: AppApiService) {
    }

    public getChannels(): Observable<IChannel[]> {
        return this.apiService.getChannels().pipe(map((response) => {
            return response.channelDetails
        }))
    }

    public getGeneries() {
        return this.getChannels()
            .pipe(
                concatAll(),
                filter(channel => Boolean(channel.genres?.length)),
                reduce((acc, channel) => [...acc, ...channel.genres], [] as IGenre[]),
                concatAll(),
                distinct(genre => genre.genreID),
                toArray()
            )
    }

}