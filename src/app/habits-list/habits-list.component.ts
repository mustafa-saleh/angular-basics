import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-habits-list',
  template: `
    <h2>Habit Tracker</h2>
    <app-habit-form (addItem)="onAddItem($event)"></app-habit-form>
    <ul>
      <app-habit-item
        *ngFor="let habit of habits"
        [habit]="habit"
      ></app-habit-item>
    </ul>
  `,
  styles: [],
})
export class HabitsListComponent implements OnInit {
  habits = [
    {
      title: 'Habit One',
    },
    {
      title: 'Habit Two',
    },
    {
      title: 'Habit Three',
    },
  ];
  constructor() {}

  onAddItem(newHabit) {
    this.habits.push(newHabit);
  }

  ngOnInit(): void {}
}
