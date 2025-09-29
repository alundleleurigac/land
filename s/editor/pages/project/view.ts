import {css, html} from "lit"
import {view} from "@e280/sly"

import {EditorContext} from "../../context/context.js"

export const ProjectPage = view(use => (context: EditorContext, projectId: string) => {
	use.styles(css`
		:host {
			display: flex;
			flex-direction: column;
			height: 100%;
			min-height: 0;
		}
		.app {
			flex: 1;
			min-height: 0;
		}
	`)

	const App = context.views.EditorApp(projectId)

	return html`<div class="app">${App}</div>`
})
