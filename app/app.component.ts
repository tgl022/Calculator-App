import { Component } from '@angular/core';
import { Log } from './shared/models/log';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent {

  logs: Log[] = [
    { message: '1+1= 1' },
    { message: '1+1= 2' },
    { message: '1+1= 3' },
    { message: '1+1= 4' },
    { message: '1+1= 5' },
    { message: '1+1= 6' },
    { message: '1+1= 7' },
    { message: '1+1= 8' },
    { message: '1+1= 9' },
    { message: '1+1= 10' }
  ];

  evalString = '';

  calculate(exp) {
    console.log(exp);
  }



  // users: User[] = [
  //   { id: 25, name: 'Chris', username: 'sevilayha' },
  //   { id: 26, name: 'Nick', username: 'whatnicktweets' },
  //   { id: 27, name: 'Holly', username: 'hollylawly' }
  // ];
  // activeUser: User;
  //
  // selectUser(user) {
  //   this.activeUser = user;
  //   console.log(this.activeUser);
  // }
  //
  // onUserCreated(event) {
  //   this.users.push(event.user);
  // }
}
