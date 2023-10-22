import { Injectable } from '@angular/core';
import {ClientData} from '../../../core/models/client';
import {clientDataList} from './data';

@Injectable({
  providedIn: 'platform'
})
export class ClientFeedbackService {
  feedbackClientList: Array<ClientData> = clientDataList;

  selected: ClientData | undefined;

  constructor() { }

  setSelected(selected: ClientData): void {
    this.selected = selected;
  }

  markProblematic(client: ClientData) {
    this.feedbackClientList = this.feedbackClientList.map(fbClient => {
      if(fbClient.id === client.id) {
        return {
          ...client,
          isProblematic: true
        };
      }else return fbClient;
    });
    console.log(this.feedbackClientList);
  }
  markNotAnswer(client: ClientData) {
    this.feedbackClientList = this.feedbackClientList.map(fbClient => {
      if(fbClient.id === client.id) {
        return {
          ...client,
          noAnswer: true
        };
      }else return fbClient;
    });

    console.log(this.feedbackClientList);
  }
}
