import {css} from "lit"

export default css`@layer view {

.toolbar {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.5em;
	padding: 0.5em;
	background: #1a1a1a;
	border-bottom: 1px solid #2a2a2a;
	flex-shrink: 0;
}

.button-group {
	display: flex;
	gap: 0.5em;
}

button {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.5em;
	height: 2.5em;
	background: #252525;
	border: 1px solid #333;
	color: #aaa;
	border-radius: 0.5em;
	cursor: pointer;
	transition: background 0.2s ease, border-color 0.2s ease;
}

button:hover {
	background: #2f2f2f;
	border-color: #555;
	color: white;
}

button:disabled {
	opacity: 0.4;
	cursor: not-allowed;
	background: #202020;
}

button svg {
	width: 1.5em;
	height: 1.5em;
}

.play-pause {
	background: var(--prime);
	border-color: transparent;
	color: black;
}

.play-pause:hover {
	filter: brightness(1.2);
}

}`
