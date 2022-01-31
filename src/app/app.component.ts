import {Component, OnInit} from '@angular/core';
import {io, Socket} from "socket.io-client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  client!: Socket;
  connected = false;
  error?: string;
  users: Map<string, number> = new Map();

  ngOnInit() {
    this.client = io('http://localhost:4593/controllers', {
      transports: ['websocket'],
      upgrade: false
    });

    this.client.on('userJoined', (user: string) => {this.users.set(user, 0)});
    this.client.on('userLeft', (user: string) => {
      this.users.delete(user)
    });
    this.client.on('connect', () => {this.connected = true});
    this.client.on('connect_error', error => {
      this.connected = false
      this.error = error.message
    });

    this.client.on('timerUpdate', (data: any) => {
      this.users.set(data.user, data.data)
    });

    this.client.connect();
  }
}
