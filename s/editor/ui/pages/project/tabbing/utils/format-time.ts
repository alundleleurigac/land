export function formatTime(ms: number) {
	const totalSeconds = ms / 1000
	const minutes = Math.floor(totalSeconds / 60)
	const seconds = Math.floor(totalSeconds % 60)
	return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}
