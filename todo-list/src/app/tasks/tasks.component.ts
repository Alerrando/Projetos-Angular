import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms"

type TasksProps = {
  id: number,
  name: string,
  checked: boolean,
}

export type MessageProps = {
  messagem: string,
  status: boolean,
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: TasksProps[] = [];
  formInput: FormGroup;
  message: MessageProps = {
    "messagem": "",
    "status": false,
  };

  constructor(private formBuilder: FormBuilder){
    this.formInput = this.formBuilder.group({
      task: "",
    });
  }

  onSubmit(): void{
    const task = {
      id: this.tasks.length + 1,
      name: this.formInput.value.task,
      checked: false,
    }

    this.tasks.push(task);
  }

  handleChecked(id: number): void{
    const aux: TasksProps[] = [...this.tasks];
    aux.forEach((task: TasksProps) => {
      if(id === task.id){ task.checked = !task.checked }
    })

    this.tasks = aux;
  }

  deleteTask(id: number): void{
    if(window.confirm(`Quer deletar a tarefa ${this.tasks.find((task) => task.id === id)?.name}?`)){
      const aux: TasksProps[] = this.tasks.filter((task) => task.id !== id)
  
      this.message.messagem = `Tarefa ${this.tasks.find((task) => task.id === id)?.name} deletada com sucesso`;
      this.message.status = true;

      setTimeout(() => {
        this.message.messagem = "";
        this.tasks = aux;
      }, 3000)
    }
  }
}
