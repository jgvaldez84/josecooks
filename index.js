function randomBrekkie() {
	var myarray = new Array(
		'cinnamonRolls.html',
		'waffles.html',
		'liegeWaffles.html'
	);
	var mynum = Math.floor(Math.random() * 3);
	var location = window.location;

	if (location == myarray[mynum]) {
		randomBrekkie();
	} else {
		window.location = myarray[mynum];
	}
}

function randomSavory() {
	var savArray = new Array(
		'italianMashupSoup.html',
		'keemaCurry.html',
		'sausageBroccolini.html',
		'pernil.html'
	);
	var savNum = Math.floor(Math.random() * 4);
	var location = window.location;

	if (location == savArray[savNum]) {
		randomSavory();
	} else {
		window.location = savArray[savNum];
	}
}

function randomDessert() {
	var myarray = new Array('cinnamonRolls.html', 'waffles.html');
	var mynum = Math.floor(Math.random() * 2);
	var location = window.location;

	if (location == myarray[mynum]) {
		randomDessert();
	} else {
		window.location = myarray[mynum];
	}
}

function randomSnack() {
	var myarray = new Array('cinnamonRolls.html', 'waffles.html');
	var mynum = Math.floor(Math.random() * 2);
	var location = window.location;

	if (location == myarray[mynum]) {
		randomSnack();
	} else {
		window.location = myarray[mynum];
	}
}
