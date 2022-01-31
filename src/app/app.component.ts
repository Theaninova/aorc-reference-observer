import {Component, OnInit} from '@angular/core';
import {io, Socket} from "socket.io-client";

type Vector3 = [number, number, number]; // float
type RotationApproximate = [number, number, number]; // byte

interface StageUpdateData {
  time: number; // seconds fraction
  carData?: {
    frame: number; // int
    position: Vector3;
    rotation: RotationApproximate;
    velocity: Vector3;
    throttleInput: number; // sbyte
    steeringInput: number; // sbyte
    brakeInput: number; // sbyte
    handbrakeInput: boolean;
    gear: number; // byte
    resetCarThisFrame: boolean;
    engineCondition: number; // sbyte
    dirtiness: number; // sbyte
  }
}

interface ClientData<T> {
  user: string;
  data: T;
}

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

    this.client.on('userJoined', (user: string) => {this.users.set(user, null)});
    this.client.on('userLeft', (user: string) => {
      this.users.delete(user)
    });
    this.client.on('connect', () => {this.connected = true});
    this.client.on('connect_error', error => {
      this.connected = false
      this.error = error.message
    });

    this.client.on('stageUpdate', (data: ClientData<StageUpdateData>) => {
      this.users.set(data.user, data.data)
      console.log(data.data)
    });

    this.client.connect();
  }
}
