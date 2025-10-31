import {html} from "lit"
import {view} from "@e280/sly"
import {Item, Waveform} from "@omnimedia/omnitool"

import styleCss from "./style.css.js"
import {TimelineItem} from "../parts/item/view.js"
import {FilmstripView} from "../parts/filmstrip/view.js"
import themeCss from "../../../../../../../../../theme.css.js"
import {EditorContext} from "../../../../../../../../../context/context.js"

export const TimelineVideo = view(use => (context: EditorContext, clip: Item.Video, ancestors: Item.Any[]) => {
	use.styles(themeCss, styleCss)

	const wave = use.once(() => {
		const wave = document.createElement("div")
		wave.style.pointerEvents = "none"
		const waveform = Waveform.init(context.driver, "/assets/temp/gl.mp4", wave)
		waveform.then(w => w.wavesurfer.setOptions({
			height: 20,
			barAlign: "bottom",
			barWidth: undefined,
			waveColor: "rgb(3, 148, 129)"
		}))
		return wave
	})

	return TimelineItem(
		context, clip,
		html`
			${FilmstripView(context, clip)}
			${wave}
		`,
		ancestors)
})


