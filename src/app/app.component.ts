import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'http-service-angular';
  pageTitle: String = 'Angular HTTP Client';
  users = new Array<any>();
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    })
  }
}
