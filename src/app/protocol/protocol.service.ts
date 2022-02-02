import {Injectable} from '@angular/core'
import {io, Socket} from 'socket.io-client'
import {fromEventPattern, Observable} from 'rxjs'
import {ClientData, StageUpdateData, Waypoints} from './type-definitions'

@Injectable({
  providedIn: 'root',
})
export class ProtocolService {
  client!: Socket

  stageUpdates!: Observable<ClientData<StageUpdateData>>

  connected!: Observable<boolean>

  userJoined!: Observable<ClientData>

  userLeft!: Observable<ClientData>

  connectError!: Observable<Error>

  waypoints!: Observable<ClientData<Waypoints>>

  constructor() {
    this.client = io('http://localhost:4593/controllers', {
      transports: ['websocket'],
      upgrade: false,
    })

    this.connected = fromEventPattern<boolean>(
      handler => this.client.on('connect', handler),
      handler => this.client.off('connect', handler),
    )

    this.userJoined = fromEventPattern<ClientData>(
      handler => this.client.on('userJoined', handler),
      handler => this.client.off('userJoined', handler),
    )

    this.userLeft = fromEventPattern<ClientData>(
      handler => this.client.on('userLeft', handler),
      handler => this.client.off('userLeft', handler),
    )

    this.connectError = fromEventPattern<Error>(
      handler => this.client.on('connect_error', handler),
      handler => this.client.off('connect_error', handler),
    )

    this.stageUpdates = fromEventPattern<ClientData<StageUpdateData>>(
      handler => this.client.on('stageUpdate', handler),
      handler => this.client.off('stageUpdate', handler),
    )

    this.waypoints = fromEventPattern<ClientData<Waypoints>>(
      handler => this.client.on('waypointsGathered', handler),
      handler => this.client.off('waypointsGathered', handler),
    )

    this.client.connect()
  }
}
