import {Component, Input} from '@angular/core'
import {CarData} from '../protocol/type-definitions'

@Component({
  selector: 'car-data',
  templateUrl: 'car-data.component.html',
  styleUrls: ['car-data.component.scss'],
})
export class CarDataComponent {
  _carData!: CarData

  @Input() set carData(carData: CarData) {
    this._carData = carData
  }
}
