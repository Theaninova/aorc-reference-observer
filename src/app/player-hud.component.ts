import {Component, Input, OnDestroy, OnInit} from '@angular/core'
import {DEFAULT_DATA, MOCK_WAYPOINTS} from './protocol/mock-data'
import {CarData, Waypoints} from './protocol/type-definitions'
import {ProtocolService} from './protocol/protocol.service'
import {Subscription} from 'rxjs'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'advanced-hud',
  templateUrl: 'player-hud.component.html',
  styleUrls: ['player-hud.component.scss'],
})
export class PlayerHudComponent implements OnInit, OnDestroy {
  connected = false

  error?: string

  waypoints: Waypoints = MOCK_WAYPOINTS

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  carData: CarData = DEFAULT_DATA.carData!

  theme: 'theme-dark' | 'theme-light' = 'theme-dark'

  steeringContent: 'stacked' | 'map' = 'map'

  subscriptions: Array<Subscription> = []

  constructor(readonly protocolService: ProtocolService, readonly route: ActivatedRoute) {}

  ngOnInit() {
    this.subscriptions.push(
      this.route.queryParams.subscribe(parameters => {
        if (parameters['theme']) {
          this.theme = /light/.test(parameters['theme']) ? 'theme-light' : 'theme-dark'
        }
        if (parameters['steering-content']) {
          this.steeringContent = parameters['steering-content'] === 'map' ? 'map' : 'stacked'
        }
      }),
      this.protocolService.connected.subscribe(connected => (this.connected = connected)),
      this.protocolService.connectError.subscribe(error => (this.error = error.message)),
      this.protocolService.stageUpdates.subscribe(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        update => (this.carData = update.data.carData ?? DEFAULT_DATA.carData!),
      ),
      this.protocolService.waypoints.subscribe(waypoints => (this.waypoints = waypoints.data)),
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach(it => it.unsubscribe())
  }
}
