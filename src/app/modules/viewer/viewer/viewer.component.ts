import {Component} from '@angular/core';
import {Client, ClientData} from '../../../core/models/client';
import {ClientFeedbackService} from '../services/client-feedback.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent {

  constructor(public clientFeedbackService: ClientFeedbackService) {
  }

  onClientSelected(client: ClientData) {
    this.clientFeedbackService.setSelected(client);
  }


}
