import {Component, Input} from '@angular/core'
import {DrivetrainData} from '../protocol/type-definitions'

@Component({
  selector: 'drivetrain-data',
  templateUrl: 'drivetrain-data.component.html',
  styleUrls: ['drivetrain-data.component.scss'],
})
export class DrivetrainDataComponent {
  _drivetrain!: DrivetrainData

  @Input() set drivetrain(drivetrain: DrivetrainData) {
    this._drivetrain = drivetrain
  }
}
