import {html} from "lit"
import {view} from "@e280/sly"

import styleCss from "./style.css.js"
import playheadSvg from "../../../../../../../icons/remix-icon/playhead.svg.js"

export const Playhead = view(use => () => {
	use.styles(styleCss)

	return html`
		<div class="playhead" style="left: ${0}px">
			${playheadSvg}
			<div class="line"></div>
		</div>
	`
})

