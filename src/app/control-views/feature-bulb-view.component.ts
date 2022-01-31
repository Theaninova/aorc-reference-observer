import {Component, Input} from '@angular/core'

@Component({
  selector: 'feature-bulb-view',
  templateUrl: './feature-bulb-view.component.html',
  styleUrls: ['./feature-bulb-view.component.scss'],
})
export class FeatureBulbViewComponent {
  _isOn!: boolean

  @Input() set isOn(value: boolean) {
    this._isOn = value
  }
}
