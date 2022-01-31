import {Component, Input} from "@angular/core";
import {CarData} from "./protocol";

@Component({
    selector: 'car-data',
    templateUrl: './car-data.component.html',
    styleUrls: ['./car-data.css']
})
export class CarDataComponent {
  _carData!: CarData;

  @Input() set carData(carData: CarData) {
    this._carData = carData;
  }
}
