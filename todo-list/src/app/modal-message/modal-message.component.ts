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
}
