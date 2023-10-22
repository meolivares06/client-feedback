import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ClientData} from '../../../../core/models/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  @Input() client!: ClientData;
  @Input() isSelected = false;


}
