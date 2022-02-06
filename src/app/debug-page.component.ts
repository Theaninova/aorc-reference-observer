import {Component, OnDestroy, OnInit} from '@angular/core'
import {DEFAULT_DATA, MOCK_DATA, MOCK_WAYPOINTS} from './protocol/mock-data'
import {StageUpdateData, Waypoints} from './protocol/type-definitions'
import {ProtocolService} from './protocol/protocol.service'
import {Subscription} from 'rxjs'

@Component({
  selector: 'debug-page',
  templateUrl: './debug-page.component.html',
  styleUrls: ['./debug-page.component.scss'],
})
export class DebugPageComponent implements OnInit, OnDestroy {
  connected = false

  error?: string

  users: Map<string, StageUpdateData> = new Map()

  mockUsers: Map<string, StageUpdateData> = new Map()

  mockWaypoints: Map<string, Waypoints> = new Map()

  theme!: 'theme-default-dark' | 'theme-default-light'

  useMock = true

  subscriptions: Subscription[] = []

  waypoints: Map<string, Waypoints> = new Map()

  constructor(readonly protocolService: ProtocolService) {}

  ngOnInit() {
    this.theme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'theme-default-dark'
      : 'theme-default-light'
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      this.theme = event.matches ? 'theme-default-dark' : 'theme-default-light'
    })

    this.subscriptions.push(
      this.protocolService.connected.subscribe(connected => (this.connected = connected)),
      this.protocolService.userJoined.subscribe(user => this.users.set(user.user, DEFAULT_DATA)),
      this.protocolService.userLeft.subscribe(user => this.users.delete(user.user)),
      this.protocolService.stageUpdates.subscribe(user => this.users.set(user.user, user.data)),
      this.protocolService.connectError.subscribe(error => (this.error = error.message)),
      this.protocolService.waypoints.subscribe(data => this.waypoints.set(data.user, data.data)),
    )

    for (const data of MOCK_DATA) {
      this.mockUsers.set(data.user, data.data)
      this.mockWaypoints.set(data.user, MOCK_WAYPOINTS)
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(it => it.unsubscribe())
  }
}
