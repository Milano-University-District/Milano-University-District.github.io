window.onload = () => {
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
