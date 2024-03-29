import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ChampionGuessComponent } from './champion-guess.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import { EndComponent } from './end.component';
import { ChampionGuessRushComponent } from './champion-guess-rush.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChampionGuessComponent,
    EndComponent,
    ChampionGuessRushComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
