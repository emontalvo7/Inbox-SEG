import { Component, OnInit } from '@angular/core';
import { enviroment } from 'src/environments/enviroment.dev';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tables: any = enviroment.INBOX;
  title = 'SEG-Inbox';
}
