import {Component, Input} from '@angular/core'

@Component({
  selector: 'feature-bulb-view',
  templateUrl: './feature-bulb-view.component.html',
  styleUrls: ['./feature-bulb-view.component.scss'],
})
export class FeatureBulbViewComponent {
  _state!: number

  @Input() set state(value: number | undefined) {
    this._state = value || 0
  }
}
