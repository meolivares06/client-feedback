import {Statement, StatementData} from './Statement';

export interface AnswerData extends StatementData {
  feedbackId: string;
}

export class Answer extends Statement {
  private _feedbackId: string;

  constructor(props: AnswerData) {
    super(props);
    this._feedbackId = props.feedbackId;
  }

  get feedbackId(): string {
    return this._feedbackId;
  }

  set feedbackId(value: string) {
    this._feedbackId = value;
  }
}
