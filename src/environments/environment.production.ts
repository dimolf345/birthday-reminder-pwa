import { IEnvironmentConfig } from './environment.model';

export const environment: IEnvironmentConfig = {
  production: true,
  firebaseConfig: {
    apiKey: 'production-api-key',
    authDomain: 'production-auth-domain',
    projectId: 'production-project-id',
    storageBucket: 'production-storage-bucket',
    messagingSenderId: 'production-messaging-sender-id',
    appId: 'production-app-id',
  },
};
