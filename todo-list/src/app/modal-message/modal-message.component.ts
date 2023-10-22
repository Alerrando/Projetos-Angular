import { Component, Input } from '@angular/core';
import { MessageProps } from '../tasks/tasks.component';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.css']
})
export class ModalMessageComponent {
  @Input()
  message: MessageProps = {
    "messagem": "",
    "status": false,
  };

  getMessageStatusClass(status: boolean): { [key: string]: boolean } {
    return status ? { 'bg-green-500': true } : { 'bg-red-500': true } ;
  }
}

