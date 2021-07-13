import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IChannelsResponse } from "./app.types";

@Injectable({ providedIn: 'root' })
export class AppApiService {
    constructor(private http: HttpClient) { }

    public getChannels(): Observable<IChannelsResponse> {
        return this.http.get<IChannelsResponse>('assets/channels.json')
    }
}
