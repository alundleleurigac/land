import {html} from "lit"
import {view} from "@e280/sly"
import {Item} from "@omnimedia/omnitool"

import styleCss from "./style.css.js"
import {TimelineItem} from "../parts/item/view.js"
import themeCss from "../../../../../../../../../theme.css.js"
import {EditorContext} from "../../../../../../../../../context/context.js"

export const TimelineVideo = view(use => (context: EditorContext, clip: Item.Clip, ancestors: Item.Any[]) => {
	use.styles(styleCss, themeCss)

	return html`${TimelineItem(context, clip, html``, ancestors)}`}
)


