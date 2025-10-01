import {html, TemplateResult} from "lit"
import {view} from "@e280/sly"
import styleCss from "./style.css.js"

export const Ruler = view(use => () => {
	use.styles(styleCss)
	const timelineDuration = 10000

	const markers = use.signal<TemplateResult[]>([])
	const interval = 1000 // 1 second

	const pixelsPerMillisecond = 0.2;

	use.once(() => {
		for (let time = 0; time <= timelineDuration; time += interval) {
			markers.value.push(html`
				<div class="marker" style="left: ${time * pixelsPerMillisecond}px">
					<span class="time">${formatTime(time)}</span>
				</div>
			`)
		}
	})

	return html`
		<div
			class="ruler"
		>${markers.value}</div>`
})

const formatTime = (ms: number) => {
	const totalSeconds = ms / 1000
	const minutes = Math.floor(totalSeconds / 60)
	const seconds = Math.floor(totalSeconds % 60)
	const milliseconds = Math.floor(ms % 1000)
	return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`
}
