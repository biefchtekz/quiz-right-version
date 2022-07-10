import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { NavbarComponent } from './navbar/navbar.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { StartPageComponent } from './start-page/start-page.component';
import {MatDialogModule} from "@angular/material/dialog";
import {CorrectDialogComponent} from "./dialogs/correct-dialog/correct-dialog.component";
import {MatButtonModule} from "@angular/material/button";
import { GameOverDialogComponent } from './dialogs/game-over-dialog/game-over-dialog.component';
import { IncorrectDialogComponent } from './dialogs/incorrect-dialog/incorrect-dialog.component';
import { ReturnDialogComponent } from './dialogs/return-dialog/return-dialog.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuizPageComponent,
    StartPageComponent,
    CorrectDialogComponent,
    GameOverDialogComponent,
    IncorrectDialogComponent,
    ReturnDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatButtonModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
