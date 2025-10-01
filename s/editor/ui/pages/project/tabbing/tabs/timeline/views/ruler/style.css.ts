import {css} from "lit"

export default css`@layer view {
:host {
	display: block;
	position: sticky;
	top: 0;
	z-index: 2;
}

.ruler {
	position: relative;
	height: 2em;
	background: #1f1f1f;
	border-bottom: 1px solid #2a2a2a;
	cursor: ew-resize;
	width: fit-content;
	min-width: 100%;
}

.marker {
	position: absolute;
	height: 100%;
	border-left: 1px solid #444;
	padding-left: 0.3em;
	display: flex;
	align-items: center;
	color: #888;
	font-size: 0.8em;
	user-select: none;
	pointer-events: none;
}
`
