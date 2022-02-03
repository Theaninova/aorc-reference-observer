import {Component, Input} from '@angular/core'
import {PositionData, Vector3, Waypoints} from '../protocol/type-definitions'
import {DomSanitizer, SafeHtml} from '@angular/platform-browser'
import {maxBy, minBy} from 'lodash'

/**
 *
 */

/*function normalize(path: [number, number, number][]): [number, number, number][] {
  const maxWidth = max([
    maxBy(path, p => p[0])![0] - minBy(path, p => p[0])![0],
    maxBy(path, p => p[1])![1] - minBy(path, p => p[1])![1],
    0, // maxBy(path, p => p[2])![2] - minBy(path, p => p[2])![2],
  ])!
  /*const minSize =
    min([minBy(path, p => p[0])![0], minBy(path, p => p[1])![1], minBy(path, p => p[2])![2]])!*

  return path.map(([x, y, z]) => [
    x /* - minSize* / maxWidth,
    y /* - minSize* / maxWidth,
    z /* - minSize* / maxWidth,
  ])
}*/

/**
 *
 */
function fixData(path: [number, number, number][]): [number, number, number][] {
  return path.map(([x, y, z]) => [x, -z, y])
}

/**
 *
 */

/*function scale(path: [number, number, number][], scale: number): [number, number, number][] {
  return path.map(([x, y, z]) => [x * scale, y * scale, z * scale])
}*/

/**
 *
 */
function minMax(path: Vector3[]): [[number, number], [number, number], [number, number]] {
  return [
    [minBy(path, p => p[0])![0], maxBy(path, p => p[0])![0]],
    [minBy(path, p => p[1])![1], maxBy(path, p => p[1])![1]],
    [minBy(path, p => p[2])![2], maxBy(path, p => p[2])![2]],
  ]
}

/**
 *
 */
function svgPathFromPoints(points: Vector3[], fraction: number, closed: boolean) {
  return (
    `M${points[0][0].toFixed(fraction)} ${points[0][1].toFixed(fraction)}` +
    points
      .slice(1)
      .map(p => `L${p[0].toFixed(fraction)} ${p[1].toFixed(fraction)}`)
      .join('') +
    (closed ? 'Z' : '')
  )
}

@Component({
  selector: 'minimap-view',
  templateUrl: './minimap.component.html',
  styleUrls: ['./minimap.component.scss'],
})
export class MinimapComponent {
  svg?: SafeHtml

  @Input() strokeWidth = 100

  resetDistance = 17

  // the road is approximately a third of the reset distance
  streetWidth = (this.resetDistance * 2) / 3

  @Input() playerSize = 1

  @Input() playerPointSize = 15

  @Input() precision = 2

  playerMapArea: [number, number, number, number] = [-100, -250, 200, 300]

  velocityScaling = 1

  velocitySize = 4

  minimapPathData!: string

  playerPath!: string

  velocityPath!: string

  viewBox!: string

  pos: PositionData = {
    position: [0, 0, 0],
    velocity: [0, 0, 0],
    rotation: [0, 0, 0],
  }

  @Input() mode: 'player' | 'full' = 'player'

  constructor(readonly sanitizer: DomSanitizer) {}

  @Input() set waypoints(waypoints: Waypoints | undefined) {
    if (!waypoints) return

    const path = fixData(waypoints)
    const [[xMin, xMax], [yMin, yMax]] = minMax(path)
    this.viewBox = `${xMin.toFixed(this.precision)} ${yMin.toFixed(this.precision)} ${(xMax - xMin).toFixed(
      this.precision,
    )} ${(yMax - yMin).toFixed(this.precision)}`
    this.minimapPathData = svgPathFromPoints(path, this.precision, false)

    this.makeSvg()
  }

  @Input() set playerPos(pos: PositionData | undefined) {
    if (!pos || pos.position?.length !== 3 || pos.rotation.length !== 3) return

    this.pos = pos
    const [x, , y] = pos.position.map(p => p.toFixed(this.precision))
    const rotDegZ = pos.rotation.map(r => r.toFixed(this.precision))[1]
    const [xVel, , yVel] = pos.velocity.map(v => (v * this.velocityScaling).toFixed(this.precision))

    if (this.mode === 'full') {
      this.playerPath = `<circle cx="${x}" cy="${-y}" r="${
        this.playerPointSize + this.streetWidth
      }" style="fill: var(--surface-variant)"></circle>
        <circle cx="${x}" cy="${-y}" r="${this.playerPointSize}" style="fill: var(--primary)"></circle>

`
      this.velocityPath = ``
    } else if (this.mode === 'player') {
      this.playerPath = `
        <path d="M0 -24L15 16L0 ${this.velocitySize * this.playerSize}L-15 16Z"
              id="playerPath"
              style="fill: var(--primary); stroke: var(--primary)"
              stroke-width="${3}"
              stroke-linejoin="round"
              stroke-linecap="round"
              transform="scale(${this.playerSize})">
        </path>`
      this.velocityPath = `
        <path d="M0 1L${xVel} ${-yVel}"
              stroke-width="${this.velocitySize * 3}"
              stroke-linejoin="round"
              fill="none"
              stroke-linecap="round"
              style="stroke: var(--primary)"
              transform="rotate(${rotDegZ})">
        </path>
        <path d="M0 1L${xVel} ${-yVel}"
              stroke-width="${this.velocitySize}"
              stroke-linejoin="round"
              fill="none"
              stroke-linecap="round"
              style="stroke: var(--surface)"
              transform="rotate(${rotDegZ})">
        </path>

      `
    }

    this.makeSvg()
  }

  makeSvg() {
    // scale(${this.mapZoom}) rotate(${this.pos.rotation[1].toFixed(
    //             this.precision,
    //           )})
    const mode = this.mode === 'player'
    const rotDegZ = this.pos.rotation.map(r => r.toFixed(this.precision))[1]
    const [x, , y] = this.pos.position.map(p => p.toFixed(this.precision))
    const transform = !mode ? '' : `transform="rotate(${-rotDegZ}) translate(${-x},${y})"`

    const minimapPath = `
      <path d="${this.minimapPathData}"
            style="stroke: var(${mode ? '--surface' : '--surface-variant'})"
            stroke-linejoin="round"
            fill="none" stroke-linecap="round"
            stroke-width="${this.streetWidth}"
            ${transform}>
      </path>
    `
    const resetOutlinePath = `
      <path d="${this.minimapPathData}"
            style="stroke: var(${mode ? '--surface-variant' : '--on-surface-variant'})"
            stroke-linejoin="round"
            fill="none"
            stroke-linecap="round"
            stroke-width="${this.resetDistance * 2}"
            ${transform}>
      </path>`

    const minimapOutlinePath = mode
      ? ''
      : `
      <path d="${this.minimapPathData}"
            style="stroke: var(--surface-variant)"
            stroke-linejoin="round"
            fill="none"
            stroke-linecap="round"
            stroke-width="${this.strokeWidth}"
            ${transform}>
      </path>`

    this.svg = this.sanitizer.bypassSecurityTrustHtml(
      `
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="${this.mode === 'player' ? this.playerMapArea.join(' ') : this.viewBox}"
             style="overflow: visible; width: 85%; height: 85%">
          ${minimapOutlinePath}
          ${resetOutlinePath}
          ${minimapPath}
          ${this.playerPath}
          ${this.velocityPath}
        </svg>`,
    )
  }
}
