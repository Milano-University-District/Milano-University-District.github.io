var interpolate = (array, value) => {
	if (value >= 1) {
		return array[array.length - 1];
	}
	const idx = Math.floor(value * (array.length - 1));
	const v0 = array[idx];
	const v1 = array[idx + 1];
	return Math.round(v0 + (v1 - v0) * (value * (array.length - 1) - idx));
};

var hexIntToRgb = (hexInt) => {
	const r = (hexInt >> 16) & 255;
	const g = (hexInt >> 8) & 255;
	const b = hexInt & 255;
	return [r, g, b];
};

var rgbToHexInt = (r, g, b) => {
	return (r << 16) + (g << 8) + b;
};

var colors = [
	parseInt("ffffff", 16),
	parseInt("0F5513", 16),
	parseInt("522070", 16),
	parseInt("1F2557", 16),
	parseInt("69311E", 16),
	parseInt("5D1335", 16),
	parseInt("ffffff", 16),
];

var reds = colors.map((color) => hexIntToRgb(color)[0]);
var greens = colors.map((color) => hexIntToRgb(color)[1]);
var blues = colors.map((color) => hexIntToRgb(color)[2]);

window.onload = () => {
	document
		.getElementsByClassName("container")[0]
		.addEventListener("scroll", (event) => {
			const height =
				event.target.scrollHeight - event.target.clientHeight;
			const scroll = event.target.scrollTop / height;
			const red = interpolate(reds, scroll);
			const green = interpolate(greens, scroll);
			const blue = interpolate(blues, scroll);
			document.body.style.backgroundColor =
				"rgb(" + red + ", " + green + ", " + blue + ")";
		});
	const btn_close = document.getElementsByClassName("modal-close");
	Array.from(btn_close).forEach((elem) => {
		elem.onclick = (_) => {
			elem.parentElement.parentElement.style.display = "none";
		};
	});

	window.onclick = (event) => {
		if (event.target.classList.contains("modal")) {
			event.target.style.display = "none";
		}
	};

	document.getElementById("btn-sec1").onclick = (_) => {
		document.getElementById("modal-sec1").style.display = "flex";
	};
	document.getElementById("btn-sec2").onclick = (_) => {
		document.getElementById("modal-sec2").style.display = "flex";
	};
	document.getElementById("btn-sec3").onclick = (_) => {
		document.getElementById("modal-sec3").style.display = "flex";
	};
	document.getElementById("btn-sec5").onclick = (_) => {
		document.getElementById("modal-sec5").style.display = "flex";
	};
};
