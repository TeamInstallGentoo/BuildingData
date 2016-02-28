"use strict";
var mode = 0;

var clickableGrid = function(rows, cols, callback) {
	var i = 0;
	var grid = document.createElement("table");
	grid.className = "grid";
	for (var r = 0; r < rows; ++r) {
		var tr = grid.appendChild(document.createElement("tr"));
		for (var c = 0; c < cols; ++c) {
			var cell = tr.appendChild(document.createElement("td"));
			cell.innerHTML = "none";
			cell.addEventListener("click", (function (el, r, c, i) {
				return function () {
					callback(el, r, c, i);
				}
			})(cell, r, c, i), false);
		}
	}
	return grid;
};

var setMode = function(m) {
	mode = m;
}

var makeArray = function(width, height, d) {
	var g = [];
	for(var y=0; y<height; y++) {
		g.push([]);
		for(var x=0; x<height; x++) {
			g[y].push(d);
		}
	}
	return g;
};


var dimensions = [300, 300];
var gr = makeArray(dimensions[0], dimensions[1], 0);
var thegrid = clickableGrid(dimensions[0], dimensions[1], function(el, r, c ,i) {
	var m;
	if(mode == 2) {
		m = prompt("what room name");
	}
	else m = mode;
	gr[r][c] = m;
	switch (mode) {
		case 0:
			el.style.backgroundColor = "#FFFFFF"
			break;
		case 1:
			el.style.backgroundColor = "#888888";
			break;
		case 2:
			el.style.backgroundColor = "#FF7301";
	}

	el.innerHTML = m;
});

var exp = function() {
	console.log(JSON.stringify(gr));
};

document.body.appendChild(thegrid);
