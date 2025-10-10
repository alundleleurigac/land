import {view} from "@e280/sly"
import {html, TemplateResult} from "lit"
import {Item} from "@omnimedia/omnitool"

import styleCss from "./style.css.js"
import {DirectiveResult} from "lit/directive.js"
import {PIXELS_PER_MILLISECOND} from "../../../../constants.js"
import themeCss from "../../../../../../../../../../theme.css.js"
import {EditorContext} from "../../../../../../../../../../context/context.js"


export const TimelineItem = view(use => (
	context: EditorContext,
	item: Item.Video,
	content: TemplateResult | DirectiveResult,
	ancestors: Item.Any[]
) => {
	use.styles(themeCss, styleCss)

	const {zoom} = context.strata.settings.state
	const visualWidth = (item.duration ?? 0) * PIXELS_PER_MILLISECOND * zoom

	return html`
		<div
			class="item ${item.kind}"
			?data-selected=${""}
			style="width: ${visualWidth}px;"
		>
			${content}
			<div class="resize-handle start"></div>
			<div class="resize-handle end"></div>
		</div>
	`
})

