import {Component, Input} from '@angular/core';
import {ClientData} from '../../../../core/models/client';
import {ClientFeedbackService} from '../../services/client-feedback.service';

@Component({
  selector: 'app-client-actions',
  templateUrl: './client-actions.component.html',
  styleUrls: ['./client-actions.component.scss']
})
export class ClientActionsComponent {
constructor(private clientFeedbackService: ClientFeedbackService) {}

  @Input() client!: ClientData;
  onMarkProblematic() {
    this.clientFeedbackService.markProblematic(this.client);
  }

  onNotAnswer() {
    this.clientFeedbackService.markNotAnswer(this.client);
  }


}
