import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { ParticlesModule } from 'angular-particle';

import { AppComponent } from './app.component';
import { ScriptComponent } from './script/script.component';
import { ConceptComponent } from './concept/concept.component';
import { StoryboardComponent } from './storyboard/storyboard.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ScriptComponent,
    ConceptComponent,
    StoryboardComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    ParticlesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
