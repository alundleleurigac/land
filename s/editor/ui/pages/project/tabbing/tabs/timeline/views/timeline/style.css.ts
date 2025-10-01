import {css} from "lit"

export default css`@layer view {

:host {
	display: flex;
	flex-direction: column;
	height: 100%;
	overflow: hidden;
}

.timeline-grid {
	display: grid;
	grid-template-columns: 150px 1fr;
	grid-template-rows: auto 1fr;
	flex: 1;
	overflow: hidden;
	position: relative;
	background: #181818;
}

.corner-box {
	background: #222;
	border-bottom: 1px solid #1a1a1a;
	border-right: 1px solid #1a1a1a;
	z-index: 3;
}

.ruler-container {
	position: relative;
	overflow: hidden;
	z-index: 2;
}

.playhead-container {
	grid-column: 2;
	grid-row: 2;
	position: relative;
	z-index: 3;
	pointer-events: none;
}

.tracks-container {
	grid-column: 1 / -1;
	grid-row: 2;
	z-index: 1;

	display: grid;
	grid-template-columns: 150px 1fr;
	grid-auto-rows: 5em;
	overflow-y: auto;
	overflow-x: hidden;
}

}`


