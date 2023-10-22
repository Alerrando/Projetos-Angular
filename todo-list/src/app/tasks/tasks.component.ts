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
  edit: number = -1;

  constructor(private formBuilder: FormBuilder){
    this.formInput = this.formBuilder.group({
      task: "",
    });
  }

  onSubmit(): void{
    if(this.edit === -1){
      this.addTask();
    }
    else{
      this.editTask();
    }
    
    setTimeout(() => {
      this.message.messagem = "";
    }, 3000);

    this.formInput = this.formBuilder.group({
      task: "",
    });
    this.edit = -1;
  }

  addTask(){
    const taskAux = {
      id: this.tasks.length + 1,
      name: this.formInput.value.task,
      checked: false,
    }
    const verifyExisty = this.tasks.find((task) => task.name === taskAux.name)?.id;
    if (verifyExisty == undefined) {
      this.tasks.push(taskAux);
      this.message.messagem = `Tarefa ${taskAux.name} adicionada com sucesso`;
      this.message.status = true;
    }
    else{
      this.message.messagem = `Tarefa ${taskAux.name} já existe`;
      this.message.status = false;
    }
  }

  editTask(){
    const aux: TasksProps[] = [...this.tasks];''
    aux.forEach((task: TasksProps) => {
      if(task.id === this.edit){
        task.name = this.formInput.value.task;
      }
    });

    this.tasks = aux;
    this.message.messagem = `Tarefa editada com sucesso`;
    this.message.status = true;
  }

  handleEdit(id: number){
    this.edit = id;
    const name = this.tasks.find((task) => task.id === id)?.name;
    this.formInput = this.formBuilder.group({
      task: name,
    });
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
