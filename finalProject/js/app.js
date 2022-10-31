// 3D Scroll

let zSpacing = -1000,
		lastPos = zSpacing / 5,
		$frames = document.getElementsByClassName('frame'),
		frames = Array.from($frames),
		zValues = [];

window.onscroll = function() {

	let top = document.documentElement.scrollTop,
			delta = lastPos - top;

	lastPos = top;

	frames.forEach(function(n, i) {
		zValues.push((i * zSpacing) + zSpacing);
		zValues[i] += delta * -5.5;
		let frame = frames[i],
				transform = `translateZ(${zValues[i]}px)`,
				opacity = zValues[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
	});

}

window.scrollTo(0, 1);

// Audio

let soundButton = document.querySelector('.soundbutton'),
		audio = document.querySelector('.audio');

soundButton.addEventListener('click', e => {
	soundButton.classList.toggle('paused');
	audio.paused ? audio.play() : audio.pause();
})

window.onfocus = function() {
	soundButton.classList.contains('paused') ? audio.pause() : audio.play();
}

window.onblur = function() {
	audio.pause();
}
