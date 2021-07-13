import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChannelsPageComponent } from './pages/channels-page/channels-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppService } from './app.service';
import { AppApiService } from './app.service.api';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ChannelsPageComponent,
        NotFoundPageComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
    providers: [
      AppService,
      AppApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
