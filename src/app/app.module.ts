import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HeroTitleComponent } from './components/hero-title/hero-title.component';
import { FeaturedCardComponent } from './components/featured-card/featured-card.component';
import { CardSimpleComponent } from './components/card-simple/card-simple.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HeroTitleComponent,
    FeaturedCardComponent,
    CardSimpleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
