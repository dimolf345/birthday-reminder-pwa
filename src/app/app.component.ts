import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'birthday-reminder';

  // Your web app's Firebase configuration

  app = initializeApp(environment.firebaseConfig);

  constructor() {
    console.log(environment.firebaseConfig);
  }
}
