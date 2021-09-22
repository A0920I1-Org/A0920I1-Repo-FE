import {Component} from '@angular/core';
import {AuthenticationService} from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meeting-manager';

  newUser: any;

  constructor(private authService: AuthenticationService) {
    this.authService.newUser.subscribe(data => this.newUser = data);
  }
}

