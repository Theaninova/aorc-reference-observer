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
  users: string[] = []

  ngOnInit() {
    this.client = io('http://localhost:4593/controllers', {
      transports: ['websocket'],
      upgrade: false
    });

    this.client.on('userJoined', (user: string) => {this.users.push(user)});
    this.client.on('userLeft', (user: string) => {
      this.users = this.users.filter(it => it !== user)
    });
    this.client.on('connect', () => {
      this.connected = true
      this.client.emit('getUsers', (users: string[]) => {
        this.users = users
        console.log(users)
      })
    });
    this.client.on('connect_error', error => {
      this.connected = false
      this.error = error.message
    });

    this.client.connect();
  }
}
