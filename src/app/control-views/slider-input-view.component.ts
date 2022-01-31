import {Component, Input} from '@angular/core'

@Component({
  selector: 'slider-input-view',
  templateUrl: './slider-input-view.component.html',
  styleUrls: ['./slider-input-view.component.scss'],
})
export class SliderInputViewComponent {
  @Input() max!: number

  @Input() min!: number

  _value = 0

  @Input() set value(value: number) {
    this._value = value
  }
}
