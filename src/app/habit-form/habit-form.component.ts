import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-habit-form',
  template: `
    <form [formGroup]="habitForm" (ngSubmit)="onSubmit(habitForm.value)">
      <input type="text" placeholder="Add Habit" formControlName="title" />
      <button type="submit">Add</button>
    </form>
  `,
  styles: [],
})
export class HabitFormComponent implements OnInit {
  habitForm;
  @Output() addItem = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
    this.habitForm = this.formBuilder.group({
      title: '',
    });
  }

  ngOnInit(): void {}

  onSubmit(newItem) {
    this.addItem.emit(newItem);
    this.habitForm.reset();
  }
}
