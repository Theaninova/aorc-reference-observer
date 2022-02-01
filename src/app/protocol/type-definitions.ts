export type Vector3 = [number, number, number] // float

export interface CarData {
  position: Vector3
  rotation: Vector3
  velocity: Vector3
  throttleInput: number // float
  steeringInput: number // float
  brakeInput: number // float
  handbrakeInput: number // float
  clutchInput: number // float
  absTriggered: boolean
  tcsTriggered: boolean
  espTriggered: boolean
  drivetrain: DrivetrainData
}

export interface DrivetrainData {
  clutch: number // float
  rpm: number // float
  torque: number // float
  gear: number // int
  wheelTireVelocity: number // float
  canStall: boolean
  throttle: number // float
  shiftTriggered: boolean
  canShiftAgain: boolean
  currentPower: number // float
  currentGearRatio: number // float
  isChangingGear: boolean
  velocity: number // float
  isStalling: boolean
}

export interface StageUpdateData {
  time: number // seconds fraction
  carData?: CarData
}

export interface ClientData<T = undefined> {
  user: string
  data: T
}
