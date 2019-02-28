﻿import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SearchService, RequestService } from "../services";

import {CarouselModule} from 'primeng/carousel';

import { SharedModule } from "../shared/shared.module";
import { MovieDetailsComponent } from "./movie/movie-details.component";
import { TvDetailsComponent } from "./tv/tv-details.component";
import { PipeModule } from "../pipes/pipe.module";
import { YoutubeTrailerComponent } from "./youtube-trailer.component";
import { MovieInformationPanelComponent } from "./movie/panels/movie-information-panel.component";
import { TvInformationPanelComponent } from "./tv/panels/tv-information-panel.component";

const routes: Routes = [
    { path: "movie/:movieDbId", component: MovieDetailsComponent },
    { path: "tv/:tvdbId/:search", component: TvDetailsComponent },
    { path: "tv/:tvdbId", component: TvDetailsComponent },
];
@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        PipeModule,
        CarouselModule,
    ],
    declarations: [
        MovieDetailsComponent,
        YoutubeTrailerComponent,
        TvDetailsComponent,
        MovieInformationPanelComponent,
        TvInformationPanelComponent,
    ],
    exports: [
        RouterModule,
    ],
    entryComponents: [
        YoutubeTrailerComponent
    ],
    providers: [
        SearchService,
        RequestService,
        ],

})
export class MediaDetailsModule { }