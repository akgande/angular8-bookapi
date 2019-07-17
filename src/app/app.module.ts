import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { BookService } from './book/book.service';
import { BookComponent } from './book/book.component';


const appRoutes: Routes = [
  { path: 'addBook', component: BookComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent, BookComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,  RouterModule.forRoot(appRoutes)
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }