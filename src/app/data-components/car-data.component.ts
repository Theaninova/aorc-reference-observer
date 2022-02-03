import {Component, Input} from '@angular/core'
import {CarData, Waypoints} from '../protocol/type-definitions'

@Component({
  selector: 'car-data',
  templateUrl: 'car-data.component.html',
  styleUrls: ['car-data.component.scss'],
})
export class CarDataComponent {
  _carData!: CarData

  _waypoints?: Waypoints

  @Input() steeringContent: 'map' | 'stacked' = 'map'

  @Input() set carData(carData: CarData) {
    this._carData = carData
  }

  @Input() set waypoints(waypoints: Waypoints | undefined) {
    this._waypoints = waypoints
  }
}
