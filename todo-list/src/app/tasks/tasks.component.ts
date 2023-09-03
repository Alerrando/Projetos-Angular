import { Component } from '@angular/core';

type TasksProps = {
  id: number,
  name: string,
  date: Date,
  checked: boolean,
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: TasksProps[] = [];
}
