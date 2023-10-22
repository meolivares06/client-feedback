import {Feedback, FeedbackData} from './feedback';
import {User, UserData} from './user';
import {Answer} from './answer';

export interface ClientData extends UserData {
  feedbackList: Array<FeedbackData>;
  isProblematic: boolean;
  noAnswer: boolean;
}


export class Client extends User {
  private _isProblematic: boolean;
  private _noAnswer: boolean;
  feedbackList: Array<FeedbackData>;

  constructor(clientData: ClientData) {
    super(clientData);
    this.feedbackList = clientData.feedbackList;
    this._isProblematic = clientData.isProblematic;
    this._noAnswer = clientData.noAnswer;
  }

  /** Client send feedback **/
  sendFeedback(feedback: FeedbackData): void {
    this.feedbackList.push(feedback);
  }

  get isProblematic(): boolean {
    return this._isProblematic;
  }

  set markAsProblematic(value: boolean) {
    this._isProblematic = value;
  }

  get noAnswer(): boolean {
    return this._noAnswer;
  }
  set noAnswer(value: boolean) {
    this._noAnswer = value
  }
}

// Special class for admin
export class Admin extends User {
  answerList: Array<Answer> = [];

  constructor() {
    super({id: '0', name: 'Administrator'});
  }

  // Admin answer feedback from users
  answerFeedback(answer: Answer): void {
    this.answerList.push(answer);
  }
}
