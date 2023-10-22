import {Statement, StatementData} from './Statement';

export interface FeedbackData extends StatementData {
  clientId: string;
}
export class Feedback extends Statement {
  private _clientId: string;

  constructor(props: FeedbackData) {
    super(props);
    this._clientId = props.clientId
  }
}
