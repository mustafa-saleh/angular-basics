import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-habits-list',
  template: `
    <h2>Habit Tracker</h2>
    <form [formGroup]="habitForm" (ngSubmit)="onSubmit(habitForm.value)">
      <input type="text" placeholder="Add Habit" formControlName="title" />
      <button type="submit">Add</button>
    </form>
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
  habitForm;
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
  constructor(private formBuilder: FormBuilder) {
    this.habitForm = this.formBuilder.group({
      title: '',
    });
  }

  onSubmit(newHabit) {
    this.habits.push(newHabit);
    this.habitForm.reset();
  }

  ngOnInit(): void {}
}
