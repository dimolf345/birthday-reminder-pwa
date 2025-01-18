import { IFirebaseConfig } from './firebase-config.model';

export interface IEnvironmentConfig {
  production: boolean;
  firebaseConfig: IFirebaseConfig;
}
