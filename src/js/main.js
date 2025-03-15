window.onload = () => {

	document.getElementById("pivot-link").onclick = (_) => {
		document.getElementById("modal-sec1").style.display = "flex";
	};
	document.getElementById("btn-sec1-open").onclick = (_) => {
		document.getElementById("modal-sec1").style.display = "flex";
	};
	document.getElementById("btn-sec1-close").onclick = (_) => {
		document.getElementById("modal-sec1").style.display = "none";
	};

	document.getElementById("btn-sec2-open").onclick = (_) => {
		document.getElementById("modal-sec2").style.display = "flex";
	};
	document.getElementById("btn-sec2-close").onclick = (_) => {
		document.getElementById("modal-sec2").style.display = "none";
	};

	document.getElementById("btn-sec3-open").onclick = (_) => {
		document.getElementById("modal-sec3").style.display = "flex";
	};
	document.getElementById("btn-sec3-close").onclick = (_) => {
		document.getElementById("modal-sec3").style.display = "none";
	};


	window.onclick = (event) => {
		if (event.target.classList.contains("sponsor-modal-inner")) {
			event.target.parentElement.style.display = "none";
		}
	};
	for (let i = 1; i <= 12; i++) {
		document.getElementById("sponsor-logo-"+i).onclick = (_) => {
			document.getElementById("sponsor-"+i).style.display = "flex";
		};
		document.getElementById("btn-sponsor-close-"+i).onclick = (_) => {
			document.getElementById("sponsor-"+i).style.display = "none";
		};
	}


};
