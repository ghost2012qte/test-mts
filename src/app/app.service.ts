import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AppApiService } from "./app.service.api";
import { IChannel } from "./app.types";

@Injectable({ providedIn: 'root' })
export class AppService {
  constructor(
    private apiService: AppApiService
  ) {}

  public getChannels(): Observable<IChannel[]> {
    return this.apiService.getChannels().pipe(map((response) => {
      return response.channelDetails
    }))
  }

  public setFilter(filter: string): void {
    localStorage.setItem('filter', filter);
  }

  public setSorting(sorting: string): void {
   localStorage.setItem('sorting', sorting);
  }

  public getFilter(): string | null {
    return localStorage.getItem('filter');
  }

  public getSorting(): string | null {
    return localStorage.getItem('sorting');
  }

}
