import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  styles: [`
  ::ng-deep nb-layout-column {
    display: flex;
    justify-content: center;
  }
  :host {
    display: flex;
  }
  nb-chat {
    width: 300px;
    margin: 1rem;
  }
`]
})
export class ChatComponent implements OnInit {
  @Input() title: String;
  @Input() size:string ="large";
  constructor() { }

  ngOnInit() {
  }

  messages: any[] = [
    {
      text: 'Small!',
      date: new Date(),
      reply: true,
      user: {
        name: 'Bot',
        avatar: 'https://i.gifer.com/no.gif',
      },
    }
  ]

  sendMessage(event) {
    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      user: {
        name: 'Jonh Doe',
        avatar: 'https://techcrunch.com/wp-content/uploads/2015/08/safe_image.gif',
      },
    });
  }

}
