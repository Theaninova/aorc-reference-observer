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

  // reset distance is 17
  streetWidth = 17

  @Input() playerSize = 3

  @Input() precision = 2

  minimapPathData!: string

  playerPath!: string

  viewBox!: string

  @Input() mode: 'player' | 'full' = 'full'

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

    const [x, , y] = pos.position.map(p => p.toFixed(this.precision))
    const rotDegZ = pos.rotation.map(r => r.toFixed(this.precision))[1]
    this.playerPath = `
      <path d="M0 -24L15 16L0 0L-15 16Z"
            style="fill: var(--tertiary)"
            transform="translate(${x},${-y})
            scale(${this.playerSize})
            rotate(${rotDegZ})">
      </path>`

    this.makeSvg()
  }

  makeSvg() {
    const minimapPath = `
      <path d="${this.minimapPathData}"
            style="stroke: var(--on-surface-variant)"
            stroke-linejoin="round"
            fill="none" stroke-linecap="round"
            stroke-width="${this.streetWidth}">
      </path>
    `
    const minimapOutlinePath = `
      <path d="${this.minimapPathData}"
            style="stroke: var(--surface-variant)"
            stroke-linejoin="round"
            fill="none"
            stroke-linecap="round"
            stroke-width="${this.strokeWidth}">
      </path>`

    this.svg = this.sanitizer.bypassSecurityTrustHtml(
      `
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="${this.viewBox}"
             style="overflow: visible; width: 90%; height: 90%">
          ${minimapOutlinePath}
          ${minimapPath}
          ${this.playerPath}
        </svg>`,
    )
  }
}
