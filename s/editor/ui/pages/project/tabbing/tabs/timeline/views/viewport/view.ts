import {html} from "lit"
import {view} from "@e280/sly"

import styleCss from "./style.css.js"
import {Toolbar} from "../toolbar/view.js"


export const TimelineViewport = view(use => () => {
	use.styles(styleCss)

	return html`
		<div class=viewport>
			<canvas></canvas>
			${Toolbar()}
		</div>
	`
})


