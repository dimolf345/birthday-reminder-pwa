import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'birthday-reminder';

  // Your web app's Firebase configuration

  firebaseConfig = {
    apiKey: 'AIzaSyAqV8tVjYugU9Vb2vOm_1s6V1U-LdcxYDY',
    authDomain: 'birthday-reminder-9ae3e.firebaseapp.com',
    projectId: 'birthday-reminder-9ae3e',
    storageBucket: 'birthday-reminder-9ae3e.firebasestorage.app',
    messagingSenderId: '60084759616',
    appId: '1:60084759616:web:8b3b448794f27d33ef43a5',
  };

  app = initializeApp(this.firebaseConfig);
}
