
import {html} from "lit"
import {view} from "@e280/sly"
import {Item, Kind} from "@omnimedia/omnitool"

import styleCss from "./style.css.js"
import {TimelineVideo} from "../items/video/view.js"
import lockSvg from "../../../../../../../icons/gravity-ui/lock.svg.js"
import volumeSvg from "../../../../../../../icons/gravity-ui/volume.svg.js"

export const TimelineTrack = view(use => (items: Item.Any[], index: number) => {
	use.styles(styleCss)

	return html`
		<div class="track-header">
			<div class="track-name">${index}</div>
			<div class="track-controls">
				<button title="Toggle Lock">${lockSvg}</button>
				<button title="Toggle Volume">${volumeSvg}</button>
			</div>
		</div>

		<div class="track-content">
			${items.map(item => {
				if(item.kind === Kind.Clip) {
					return TimelineVideo(item)
				}
			})}
		</div>
	`
})
