import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agilebot';
  events: string[] = [];
  opened: boolean = true;
  toggleSideNav(){
    this.opened = this.opened ? false : true;
  }
}
