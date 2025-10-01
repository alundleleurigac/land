import {view} from "@e280/sly"
import {html, TemplateResult} from "lit"
import {Item} from "@omnimedia/omnitool"

import styleCss from "./style.css.js"

export const TimelineItem = view(use => (
	item: Item.Clip,
	content: TemplateResult,
) => {
	use.styles(styleCss)

	return html`
		<div
			class="item ${item.kind}"
			?data-selected=${""}
			style="
				width: ${item.duration}px;
			"
		>
			${content}
			<div class="resize-handle start"></div>
			<div class="resize-handle end"></div>
		</div>
	`
})

