import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  inputValue = ''; tableIptValue!: string;
  taskIndex!: number;
  isSave = false;

  userTasks: { name: string; check: boolean; }[] = [
    { name: 'HTML', check: true },
    { name: 'CSS3', check: true },
    { name: 'SCSS', check: false },
  ];

  constructor() { }
  ngOnInit(): void { }

  addTask(input: HTMLInputElement): void {
    if (this.inputValue === '') { input.placeholder = 'Please write text...' } else {
      this.userTasks.push({ name: this.inputValue, check: false });
      this.inputValue = '';
      input.placeholder = '';
    }
  }

  changeCheckBox(index: number): void { this.userTasks[index].check = !this.userTasks[index].check }

  editTask(index: number): void {
    this.tableIptValue = this.userTasks[index].name;
    this.taskIndex = index;
    this.isSave = true;
  }

  deleteTask(index: number): void {
    this.userTasks.splice(index, 1);
    if (this.isSave) this.isSave = false;
  }

  saveTask(input: HTMLInputElement): void {
    if (this.tableIptValue === '') { input.placeholder = 'Please write text...' } else {
      this.userTasks[this.taskIndex].name = this.tableIptValue;
      this.isSave = false;
    }
  }
}
