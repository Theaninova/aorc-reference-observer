import {Component, Input, OnInit} from '@angular/core'
import {io, Socket} from 'socket.io-client'
import {ClientData, StageUpdateData} from '../protocol'

const DEFAULT_DATA: StageUpdateData = {
  time: 0,
  carData: {
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    velocity: [0, 0, 0],
    clutchInput: 0,
    throttleInput: 0,
    steeringInput: 0,
    brakeInput: 0,
    handbrakeInput: 0,
    tcsTriggered: false,
    espTriggered: false,
    absTriggered: false,
    drivetrain: {
      velocity: 0,
      wheelTireVelocity: 0,
      rpm: 0,
      canStall: false,
      isStalling: false,
      torque: 0,
      clutch: 0,
      canShiftAgain: true,
      currentGearRatio: 0,
      currentPower: 0,
      gear: 1,
      isChangingGear: false,
      shiftTriggered: false,
      throttle: 0,
    },
  },
}

@Component({
  selector: 'advanced-hud-overlay',
  templateUrl: './advanced-hud-overlay.component.html',
  styleUrls: ['./advanced-hud-overlay.component.scss'],
})
export class AdvancedHudOverlayComponent implements OnInit {
  client!: Socket

  connected = false

  error?: string

  user: StageUpdateData = DEFAULT_DATA

  @Input() theme: 'theme-dark' | 'theme-light' = 'theme-dark'

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
      this.user = data.data ?? DEFAULT_DATA
    })

    this.client.on('stageUpdate', (data: ClientData<StageUpdateData>) => {
      this.user = data.data ?? DEFAULT_DATA
    })

    this.client.connect()
  }
}
