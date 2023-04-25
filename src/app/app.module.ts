import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardNewsComponent } from './components/card-news/card-news.component';
import { ButtonComponent } from './components/button/button.component';
import { EntryDataComponent } from './components/entry-data/entry-data.component';

@NgModule({
  declarations: [
    AppComponent,
    CardNewsComponent,
    ButtonComponent,
    EntryDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
