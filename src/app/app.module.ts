import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HabitsListComponent } from './habits-list/habits-list.component';
import { HabitItemComponent } from './habit-item/habit-item.component';
import { HabitFormComponent } from './habit-form/habit-form.component';

@NgModule({
  declarations: [AppComponent, HabitsListComponent, HabitItemComponent, HabitFormComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
