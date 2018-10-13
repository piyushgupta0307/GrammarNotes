import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GrammarNoteComponent } from './grammar-note/grammar-note.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'GrammarNotes', component: GrammarNoteComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GrammarNoteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
