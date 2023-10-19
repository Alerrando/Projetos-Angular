import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms"

type TasksProps = {
  id: number,
  name: string,
  checked: boolean,
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: TasksProps[] = [];
  formInput: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.formInput = this.formBuilder.group({
      task: "",
    });
  }

  onSubmit(): void{
    const task = {
      id: this.tasks.length + 1,
      name: this.formInput.value,
      checked: false,
    }

    this.tasks.push(task);
  }
}
