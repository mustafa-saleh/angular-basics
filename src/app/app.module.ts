import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HabitsListComponent } from './habits-list/habits-list.component';
import { HabitsDetailComponent } from './habits-detail/habits-detail.component';
import { HabitItemComponent } from './habit-item/habit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HabitsListComponent,
    HabitsDetailComponent,
    HabitItemComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
