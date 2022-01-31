import {Component, Input} from "@angular/core";
import {DrivetrainData} from "./protocol";

@Component({
    selector: "drivetrain-data",
    templateUrl: "./drivetrain-data.component.html",
    styleUrls: ["./drivetrain-data.css"]
})
export class DrivetrainDataComponent {
  _drivetrain!: DrivetrainData;

  @Input() set drivetrain(drivetrain: DrivetrainData) {
    this._drivetrain = drivetrain;
  }
}
