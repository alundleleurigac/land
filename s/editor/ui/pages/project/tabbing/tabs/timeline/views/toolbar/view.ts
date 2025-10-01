import {html} from "lit"
import {view} from "@e280/sly"

import styleCss from "./style.css.js"
import themeCss from "../../../../../../../../theme.css.js"
import playSvg from "../../../../../../../icons/gravity-ui/play.svg.js"
import pauseSvg from "../../../../../../../icons/gravity-ui/pause.svg.js"
import scissorsSvg from "../../../../../../../icons/gravity-ui/scissors.svg.js"
import redoSvg from "../../../../../../../icons/material-design-icons/redo.svg.js"
import undoSvg from "../../../../../../../icons/material-design-icons/undo.svg.js"
import zoomInSvg from "../../../../../../../icons/material-design-icons/zoom-in.svg.js"
import zoomOutSvg from "../../../../../../../icons/material-design-icons/zoom-out.svg.js"

export const Toolbar = view(use => () => {
	use.styles(themeCss, styleCss)
	const isPlaying = use.signal(false)

	return html`
		<div class="toolbar">
			<div class="button-group">
				<button @click=${() => console.log("undo")} ?disabled=${"!canUndo"}>
					${undoSvg}
				</button>
				<button @click=${() => console.log("redo")} ?disabled=${"!canRedo"}>
					${redoSvg}
				</button>
			</div>
			<div class="button-group">
				<button>
					${scissorsSvg}
				</button>
			</div>
			<div class="button-group">
				<button
					class="play-pause"
					@click=${() => isPlaying(!isPlaying.value)}>
					${isPlaying.value ? pauseSvg : playSvg}
				</button>
			</div>
			<div class="button-group">
				<button @click=${() => console.log("zoom in")}>
					${zoomInSvg}
				</button>
				<button @click=${() => console.log("zoom out")}>
					${zoomOutSvg}
				</button>
			</div>
		</div>
	`
})


