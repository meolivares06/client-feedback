import {Component, Input} from '@angular/core';
import {Feedback, FeedbackData} from '../../../../core/models/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  @Input() feedback!: FeedbackData;
}
