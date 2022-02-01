import {Component, Input, OnDestroy, OnInit} from '@angular/core'
import {DEFAULT_DATA} from './protocol/mock-data'
import {CarData, StageUpdateData} from './protocol/type-definitions'
import {ProtocolService} from './protocol/protocol.service'
import {Subscription} from 'rxjs'

@Component({
  selector: 'advanced-hud',
  templateUrl: 'player-hud.component.html',
  styleUrls: ['player-hud.component.scss'],
})
export class PlayerHudComponent implements OnInit, OnDestroy {
  connected = false

  error?: string

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  carData: CarData = DEFAULT_DATA.carData!

  @Input() theme: 'theme-dark' | 'theme-light' = 'theme-dark'

  subscriptions: Array<Subscription> = []

  constructor(readonly protocolService: ProtocolService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.protocolService.connected.subscribe(connected => (this.connected = connected)),
      this.protocolService.connectError.subscribe(error => (this.error = error.message)),
      this.protocolService.stageUpdates.subscribe(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        update => (this.carData = update.data.carData ?? DEFAULT_DATA.carData!),
      ),
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach(it => it.unsubscribe())
  }
}
