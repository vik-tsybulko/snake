import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArenaComponent } from './components/arena/arena.component';
import { SnakeComponent } from './components/snake/snake.component';
import { EatComponent } from './components/eat/eat.component';
import { WallComponent } from './components/wall/wall.component';

@NgModule({
  declarations: [
    AppComponent,
    ArenaComponent,
    SnakeComponent,
    EatComponent,
    WallComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
