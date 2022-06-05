import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import jss from 'jss';
import preset from 'jss-preset-default';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './header/title/title.component';
import { ExpanseComponent } from './expanse/expanse.component';
import { SectionComponent } from './expanse/section/section.component';

jss.setup(preset());

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    ExpanseComponent,
    SectionComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
