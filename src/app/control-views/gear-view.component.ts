import {Component, Input} from '@angular/core'
import {DrivetrainData} from '../protocol/type-definitions'

@Component({
  selector: 'gear-view',
  templateUrl: './gear-view.component.html',
  styleUrls: ['./gear-view.component.scss'],
})
export class GearViewComponent {
  _drivetrain?: DrivetrainData

  @Input() set drivetrain(drivetrain: DrivetrainData | undefined) {
    this._drivetrain = drivetrain
  }
}
