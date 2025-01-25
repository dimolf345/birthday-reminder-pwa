import { IEnvironmentConfig } from './environment.model';

export const environment: IEnvironmentConfig = {
  production: true,
  firebaseConfig: {
    apiKey: 'firebaase-api-key',
    authDomain: 'firebase-production-auth-domain',
    projectId: 'firebase-production-project-id',
    storageBucket: 'firebase-production-storage-bucket',
    messagingSenderId: 'firebase-production-messaging-sender-id',
    appId: 'firebase-production-app-id',
  },
};
