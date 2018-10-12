import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GrammarNoteComponent } from './grammar-note/grammar-note.component';

const routes: Routes = [
  { path: 'heroes', component: GrammarNoteComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GrammarNoteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
