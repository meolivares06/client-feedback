import {ClientData} from '../../../core/models/client';

export const clientDataList: Array<ClientData> = [
  {
    id: '1',
    isProblematic: false,
    noAnswer: false,
    feedbackList: [
      {
        id: '1',
        text: 'Feedback 1 del cliente 1',
        read: false,
        createdAt: new Date(),
        clientId: '1'
      },
      {
        id: '2',
        text: 'Feedback 2 del cliente 1',
        read: false,
        createdAt: new Date(),
        clientId: '1'
      }
    ],
    name: 'Client number 1'
  },
  {
    id: '2',
    isProblematic: false,
    noAnswer: false,
    feedbackList: [
      {
        id: '1',
        text: 'Feedback 1 del cliente 2',
        read: false,
        createdAt: new Date(),
        clientId: '2'
      },
      {
        id: '2',
        text: 'Feedback 2 del cliente 2',
        read: false,
        createdAt: new Date(),
        clientId: '2'
      }
    ],
    name: 'Client number 2'
  },
  {
    id: '3',
    isProblematic: false,
    noAnswer: false,
    feedbackList: [

      {
        id: '1',
        text: 'Feedback 1 del cliente 3',
        read: false,
        createdAt: new Date(),
        clientId: '3'
      },
      {
        id: '2',
        text: 'Feedback 2 del cliente 3',
        read: false,
        createdAt: new Date(),
        clientId: '3'
      }
    ],
    name: 'Client number 3'
  },
  {
    id: '4',
    isProblematic: false,
    noAnswer: false,
    feedbackList: [
      {
        id: '1',
        text: 'Feedback 1 del cliente 4',
        read: false,
        createdAt: new Date(),
        clientId: '4'
      },
      {
        id: '2',
        text: 'Feedback 2 del cliente 4',
        read: false,
        createdAt: new Date(),
        clientId: '4'
      }
    ],
    name: 'Client number 4'
  }
]
