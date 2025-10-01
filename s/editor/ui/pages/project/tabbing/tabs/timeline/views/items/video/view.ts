import {html} from "lit"
import {view} from "@e280/sly"
import {Item} from "@omnimedia/omnitool"

import styleCss from "./style.css.js"
import {TimelineItem} from "../parts/item.js"

export const TimelineVideo = view(use => (clip: Item.Clip) => {
	use.styles(styleCss)

	return html`${TimelineItem(clip, html`video`)}`
})


