# AORC Reference Controller

[![Website shields.io](https://img.shields.io/website-up-down-green-red/https/theaninova.github.io/aorc-reference-observer/.svg)](https://theaninova.github.io/aorc-reference-observer/)
[![GitHub license](https://img.shields.io/github/license/theaninova/aorc-reference-observer.svg)](https://github.com/wulkanat/aorc-server/blob/master/LICENSE)
![build](https://github.com/theaninova/aorc-reference-observer/actions/workflows/main.yml/badge.svg)

[![](https://img.shields.io/badge/Server-GitHub-23292F)](https://github.com/Theaninova/aorc-server)
[![](https://img.shields.io/badge/AOR%20Client%20Mod-GitHub-23292F)](https://github.com/Theaninova/aorc-client)

#### Discord

[![Art Or Rally Discord](https://badgen.net/discord/members/Sx3e7qGTh9)](https://discord.gg/Sx3e7qGTh9)

## Info

**For more information on controller development, please refer to
the [according section in the client's documentation](https://github.com/Theaninova/aorc-client#controller-development)**

This is a simple reference implementation of the AORC controller with little styling applied.

## OBS Overlays

### Advanced HUD

[Demo Video](https://www.youtube.com/watch?v=_Nj0vCCIEK0)

Add a browser source, then add this URL:

[https://theaninova.github.io/aorc-reference-observer/advanced-hud](https://theaninova.github.io/aorc-reference-observer/advanced-hud)

*Note: You still need the [client mod](https://github.com/Theaninova/aorc-server) and the
[server](https://github.com/Theaninova/aorc-server) running to use this overlay.*

![](https://media.discordapp.net/attachments/937310742003187722/939887837950644234/unknown.png?width=788&height=448)

#### Features

* light & dark theme!
* Gorgeous UI
* Adaptive theme with dark mode
  * Theme adapts to the current level you are in
  * Optionally, specify the theme you want to use

##### Inputs

* Steering
* Throttle
* Brake
* Handbrake
* Clutch

##### In-game data

* RPM & RPM vs Throttle
* Clutch position
* Gear position & Switching time
* ABS
* TCS & EBS (seems to be non-functional)
* Stalling (seems to be non-functional)

##### Minimap

* Player Position
* Player Direction
* Player Velocity & Direction *Tip for interpretation:*
  * If the velocity indicators sways off from the player direction, you are probably
    sliding
  * The length of the velocity indicator is not arbitrarily chosen. It's exactly scaled
    to the map, so it's the exact point where you would be in one second if you kept
    the current momentum
  * Personal observation: The tip of the indicator never went beyond the map boundaries,
    usually it going beyond the map boundaries meant I was going off the map
* Map boundaries
  * Approximate street width (About 1/3rd of the total playable width)
  * Exact width of the safe zones, aka the grass areas you can still go on without
    getting reset. Please note that the safe zones are only somewhat exact, because
    in-game they are interpreted as spheres r=17 at the waypoints, and not as a continuous
    path like on the minimap
  * Exact size and position of manually placed reset zones (WIP)

#### Configuration

You can configure the HUD by adding the following query parameters

| Parameter          | Description                                                           | Values                                                       |
|--------------------|-----------------------------------------------------------------------|--------------------------------------------------------------|
| `theme`            | Specify a theme override                                              | `default`, `cherry`, `finland`, `nasu`, `norway`, `sardinia` |
| `dark-mode`        | Weather to enable dark mode (default is true)                         | `true`, `false`                                              |
| `map-zoom`         | Controls the size of the map in in-game units, with the player at 0,0 | `[originX (left)]-[originY(top)]-[width]-[height]`           |
| `player-zoom`      | Controls the relative zoom factor of the player                       | `[number]`                                                   |



Query parameters are used like this:
`[original URL]?[parameter name]=[parameter value]`

You can add additional parameters like this
`[original URL]?[parameter name]=[parameter value]&[parameter name]=[parameter value]`

For example to have a light HUD with a map, you can add the following query parameter:
`[original URL]?theme=light&dark-mode=false`

*Note: The parameters are usually quite forgiving, for example with the theme you can
use anything that contains the word `light` or `dark`. But be aware that this behavior
might change in the future if more complex systems are added*
