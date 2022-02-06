export type Vector3 = [number, number, number] // float

export interface PositionData {
  position: Vector3
  rotation: Vector3
  velocity: Vector3
}

export interface AssistanceData {
  absTriggered: number // float
  tcsTriggered: number // float
  espTriggered: number // float
}

export interface InputData {
  throttleInput: number // float
  steeringInput: number // float
  brakeInput: number // float
  handbrakeInput: number // float
  clutchInput: number // float
}

export interface CarData {
  positionData?: PositionData
  inputData?: InputData
  brakeData?: BrakeData
  drivetrain?: DrivetrainData
  assistance?: AssistanceData
}

export interface BrakeData {
  temperatureBack: number // float
  temperatureFront: number // float
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

export type Waypoints = Vector3[]

export interface StageUpdateData {
  time: number // seconds fraction
  carData?: CarData
}

export interface ClientData<T = undefined> {
  user: string
  data: T
}
