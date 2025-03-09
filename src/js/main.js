window.onload = () => {

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
};
