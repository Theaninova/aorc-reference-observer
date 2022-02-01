import {Component, OnDestroy, OnInit} from '@angular/core'
import {DEFAULT_DATA, MOCK_DATA} from './protocol/mock-data'
import {StageUpdateData} from './protocol/type-definitions'
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

  theme!: 'theme-dark' | 'theme-light'

  useMock = true

  subscriptions: Subscription[] = []

  constructor(readonly protocolService: ProtocolService) {}

  ngOnInit() {
    this.theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'theme-dark' : 'theme-light'
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      this.theme = event.matches ? 'theme-dark' : 'theme-light'
    })

    this.subscriptions.push(
      this.protocolService.connected.subscribe(connected => (this.connected = connected)),
      this.protocolService.userJoined.subscribe(user => this.users.set(user.user, DEFAULT_DATA)),
      this.protocolService.userLeft.subscribe(user => this.users.delete(user.user)),
      this.protocolService.stageUpdates.subscribe(user => this.users.set(user.user, user.data)),
      this.protocolService.connectError.subscribe(error => (this.error = error.message)),
    )

    for (const data of MOCK_DATA) {
      this.mockUsers.set(data.user, data.data)
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(it => it.unsubscribe())
  }
}
