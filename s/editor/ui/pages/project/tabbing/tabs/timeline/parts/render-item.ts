import {html} from "lit"
import {Content} from "@e280/sly"
import {Item, Kind} from "@omnimedia/omnitool"

import {StackView} from "../views/items/stack/view.js"
import {TimelineVideo} from "../views/items/video/view.js"
import {SequenceView} from "../views/items/sequence/view.js"
import {EditorContext} from "../../../../../../../context/context.js"

export function renderItem(context: EditorContext, id: number, ancestors: Item.Any[]): Content {
	const itemsMap = new Map(
		context.strata.timeline.state.timeline.items
			.map(item => [item.id, item])
	)

	const item = itemsMap.get(id)!
	switch (item.kind) {
		case Kind.Sequence: {
			return SequenceView(context, item as Item.Sequence, ancestors)
		}
		case Kind.Stack: {
			return StackView(context, item as Item.Stack, ancestors)
		}
		case Kind.Clip:
			return TimelineVideo(context, item, ancestors)
		default:
			return html`<div>Unknown Item: ${item.kind}</div>`
	}

}
