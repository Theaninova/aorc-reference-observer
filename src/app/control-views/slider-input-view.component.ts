import {Component, Input} from '@angular/core'

@Component({
  selector: 'slider-input-view',
  templateUrl: 'slider-input-view.component.html',
  styleUrls: ['slider-input-view.component.scss', 'control-container.scss'],
})
export class SliderInputViewComponent {
  @Input() max = 1

  @Input() min = 0

  @Input() unit?: string

  @Input() secondaryInput = false

  _secondary?: number

  _primary = 0

  _value?: number

  @Input() set value(value: number | undefined) {
    this._value = value
  }

  @Input() set primary(value: number) {
    this._primary = value
  }

  @Input() set secondary(actual: number) {
    this._secondary = (actual - this.min) / (this.max - this.min)
  }
}
