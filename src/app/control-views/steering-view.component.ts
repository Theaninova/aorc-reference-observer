import {Component, Input} from '@angular/core'
import {DomSanitizer, SafeStyle} from '@angular/platform-browser'

@Component({
  selector: 'steering-view',
  templateUrl: 'steering-view.component.html',
  styleUrls: ['steering-view.component.scss', 'control-container.scss'],
})
export class SteeringViewComponent {
  _transform!: SafeStyle

  _value!: number

  @Input() inside: 'stacked' | 'map' = 'map'

  constructor(readonly sanitizer: DomSanitizer) {}

  @Input() set value(value: number) {
    this._value = value
    this._transform = this.sanitizer.bypassSecurityTrustStyle(`rotate(${value * 90}deg 120 120)`)
  }
}
