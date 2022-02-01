import {Component, OnInit} from '@angular/core'
import {io, Socket} from 'socket.io-client'
import {ClientData, StageUpdateData} from './protocol'

const mockData: ClientData<StageUpdateData>[] = [
  {
    user: 'MOCK-1',
    data: {
      time: 124.525_256_1,
      carData: {
        position: [0, 0, 0],
        rotation: [0, 0, 0],
        velocity: [0, 0, 0],
        clutchInput: 0.66,
        throttleInput: 0.5,
        steeringInput: 0.2533,
        brakeInput: 0.52,
        handbrakeInput: 0.663_323_44,
        tcsTriggered: false,
        espTriggered: true,
        absTriggered: false,
        drivetrain: {
          velocity: 24.256,
          wheelTireVelocity: 25.256,
          rpm: 2405.205,
          canStall: false,
          isStalling: false,
          torque: 13.256,
          clutch: 0.5,
          canShiftAgain: true,
          currentGearRatio: 1.5,
          currentPower: 13.256,
          gear: 1,
          isChangingGear: false,
          shiftTriggered: false,
          throttle: 0.5,
        },
      },
    },
  },
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  client!: Socket

  connected = false

  error?: string

  users: Map<string, StageUpdateData | null> = new Map()

  theme!: 'theme-dark' | 'theme-light'

  useMock = true

  ngOnInit() {
    this.theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'theme-dark' : 'theme-light'
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      this.theme = event.matches ? 'theme-dark' : 'theme-light'
    })

    this.client = io('http://localhost:4593/controllers', {
      transports: ['websocket'],
      upgrade: false,
    })
    this.client.on('connect', () => {
      this.connected = true
    })
    this.client.on('connect_error', error => {
      this.connected = false
      this.error = error.message
    })

    this.client.on('userJoined', (data: ClientData) => {
      this.users.set(data.user, null)
    })
    this.client.on('userLeft', (data: ClientData) => {
      this.users.delete(data.user)
    })

    this.configureMock()

    this.client.connect()
  }

  configureMock() {
    this.users = new Map<string, StageUpdateData | null>()
    if (this.useMock) {
      this.client.removeAllListeners('stageUpdate')
      for (const data of mockData) {
        this.users.set(data.user, data.data)
      }
    } else {
      this.client.removeAllListeners('stageUpdate')
      this.client.on('stageUpdate', (data: ClientData<StageUpdateData>) => {
        this.users.set(data.user, data.data)
      })
    }
  }
}
