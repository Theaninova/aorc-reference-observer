import {Component, OnInit} from '@angular/core';
import {io, Socket} from "socket.io-client";
import {ClientData, StageUpdateData} from "./protocol";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  client!: Socket;
  connected = false;
  error?: string;
  users: Map<string, StageUpdateData | null> = new Map();

  ngOnInit() {
    this.client = io('http://localhost:4593/controllers', {
      transports: ['websocket'],
      upgrade: false
    });
    this.client.on('connect', () => {this.connected = true});
    this.client.on('connect_error', error => {
      this.connected = false
      this.error = error.message
    });

    this.client.on('userJoined', (data: ClientData) => {this.users.set(data.user, null)});
    this.client.on('userLeft', (data: ClientData) => {
      this.users.delete(data.user)
    });

    this.client.on('stageUpdate', (data: ClientData<StageUpdateData>) => {
      this.users.set(data.user, data.data)
    });

    this.client.connect();
  }
}
