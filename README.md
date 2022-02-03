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

![](about-images/advanced-hud.png)

#### Configuration

You can configure the HUD by adding the following query parameters

<!-- Markdown table with the parameters `theme` and `steering-content` -->


| Parameter          | Description                                | Values          |
|--------------------|--------------------------------------------|-----------------|
| `theme`            | The theme to use.                          | `light`, `dark` |
| `steering-content` | The content to show in the steering wheel. | `map`, `status` |

Query parameters are used like this:
`[original URL]?[parameter name]=[parameter value]`

You can add additional parameters like this
`[original URL]?[parameter name]=[parameter value]&[parameter name]=[parameter value]`

For example to have a light HUD with a map, you can add the following query parameter:
`[original URL]?theme=light&steering-content=map`

*Note: The parameters are usually quite forgiving, for example with the theme you can
use anything that contains the word `light` or `dark`. But be aware that this behavior
might change in the future if more complex systems are added*
